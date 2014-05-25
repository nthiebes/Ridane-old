/**
        Weather.js provides a javascript class which generate dynamic weather-like effects on a specified image source inside an html page.
        A supported image source can be an html image object or a canvas object.
        The Weather class is designed to be as convenient as possible to integrate into an existing html page requiring only a few lines of code.

        Copyright (c) 2010 humu2009@gmail.com
        Weather.js is freely distributable under the terms of the MIT license.

        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
**/


/**
        @class Weather. The Weather class apply dynamic weather-like effects on a specified static or animated image inside an html page.
*/
Weather = function() {
        this.canvas = null;
        this.ctx = null;
        this.bkgImage = null;
        this.bkgPixels = null;
        this.imageData = null;
        this.timerId = 0;
        this.past = 0;
        this.frameCount = 0;
        this.fps = 0;
        this.syncFrameCount = 0;
        this.shouldSync = true;
        this.rain = {};
        this.fog = {};
        this.params = {
                imageid: '', 
                canvasid: '', 
                imageurl: '', 
                rainon: false, 
                raindropnumber: 2000, 
                raindensity: 50, 
                rainspeed: 8, 
                raindiffspeed: 8, 
                raincolor1: '#dddddd', 
                raincolor2: '#dddddd', 
                raininteraction: false,
                fogon: false, 
                fogdensity: 4, 
                fogspeed: 20, 
                fogdirection: 'right', 
                fogmin: 0, 
                fogmax: 255, 
                fogmult: 255, 
                foginteraction: false, 
                syncinterval: 0, 
                showfps: false
        };
};

/**
        Set value for a parameter to enable/disable or argument the effects.
        @param {string} param Name of the parameter to set. This is case sensitive.
        @param value New value for the specified parameter.
        @public
*/
Weather.prototype.setParameter = function(param, value) {
        this.params[param] = value;
};

/**
        Prepare for all. This should always be called before the first time the start() method is called.
        @public
*/
Weather.prototype.init = function() {
        this.canvas = null;
        this.ctx = null;
        this.bkgImage = null;
        this.imageData = null;

        if(this.params['imageid'] != '') {
                var img = document.getElementById(this.params['imageid']);
                if(img) {
                        if(this.isImage(img) || this.isVideo(img) || this.isCanvas(img)) {
                                this.canvas = document.createElement('canvas');
                                this.canvas.id = img.id;
                                this.canvas.width = img.width;
                                this.canvas.height = img.height;

                                // on-the-spot replace original image object with the new canvas object
                                img.parentNode.replaceChild(this.canvas, img);
                                this.bkgImage = img;
                        }
                }
        }
        else if(this.params['canvasid'] != '' && this.params['imageurl'] != '') {
                var canvas = document.getElementById(this.params['canvasid']);
                var imgurl = this.params['imageurl'];
                if(canvas) {
                        if(this.isCanvas(canvas)) {
                                this.canvas = canvas;
                                var img = new Image;
                                var self = this;

                                img.onload = function() {
                                        self.bkgImage = this;
                                };

                                img.onerror = function() {
                                        self.bkgImage = null;
                                };

                                img.src = imgurl;
                        }
                }
        }

        if(this.canvas) {
                try {
                        this.ctx = this.canvas.getContext('2d');

                        // set font for canvas text output
                        this.ctx.font = '12px impact';
                        this.ctx.fillStyle = '#ff0000';
                        this.ctx.textAlign = 'left';

                        // init weather effects
                        this.initRain();
                        this.initFog();
                }
                catch (e) {
                        this.ctx = null;
                }
        }
};

/**
        Start to generate effects on the image.
        @public
*/
Weather.prototype.start = function() {
        if(this.timerId > 0)
                this.stop();

        this.past = Date.now();
        this.frameCount = 0;
        this.fps = 0;
        this.syncFrameCount = 0;
        this.shouldSync = true;

        var self = this;
        this.timerId = setInterval( function(){self.run();}, 1000/24 );
};

/**
        Stop or pause generation of effects.
        @public
*/
Weather.prototype.stop = function() {
        if(this.timerId > 0) {
                clearInterval(this.timerId);
                this.timerId = 0;
        }
};

/**
        Generate a single frame.
        @private
*/
Weather.prototype.run = function() {
        if(!this.ctx)
                return; 

        // idle if background image is invalid or still in loading
        if(!this.bkgImage || !this.isImageOk(this.bkgImage))
                return;

        if(this.bkgPixels == null) {
                this.bkgPixels = new Array(this.canvas.width * this.canvas.height);
                this.shouldSync = true;
        }

        var syncinterval = this.params['syncinterval'];
        this.shouldSync = this.shouldSync || (++this.syncFrameCount == syncinterval);

        // do synchronize and cache content of the background image for each repaint
        if(this.shouldSync) {
                try {
                        // paint background image onto canvas
                        this.ctx.drawImage(this.bkgImage, 0, 0, this.canvas.width, this.canvas.height);
                        // get pixel data array of what is on canvas
                        this.imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
                        // copy those pixels to cache
                        this.cacheBackground();
                }
                catch (e) {
                        this.imageData = null;
                }

                this.syncFrameCount = 0;
                this.shouldSync = false;
        }

        // paint image with effects
        //
        this.beginEffects();
        this.drawEffects();
        this.endEffects();

        // re-calculate fps per 10 frames
        if(++this.frameCount == 10) {
                var now = Date.now();
                this.fps = this.frameCount * 1000 / (now - this.past);
                this.past = now;
                this.frameCount = 0;
        }

        // report fps statistics
        if(this.params['showfps'])
                this.ctx.fillText('fps: '+ this.fps.toFixed(2), 5, 15, 100);
};

/**
        Check if a given object is an html image element.
        @private
*/
Weather.prototype.isImage = function(obj) {
        return (obj instanceof HTMLImageElement);
};

/**
        Check if a given object is a html video element.
        @private
*/
Weather.prototype.isVideo = function(obj) {
        return (obj instanceof HTMLVideoElement);
};

/**
        Check if a given object is a html canvas element.
        @private
*/
Weather.prototype.isCanvas = function(obj) {
        return (obj instanceof HTMLCanvasElement);
};

/**
        Check if a given image has content.
        @private
*/
Weather.prototype.isImageOk = function(img) {
        return (img.naturalWidth > 0) && (img.naturalHeight > 0);
};

/**
        Cache the content of the background image.
        @private
*/
Weather.prototype.cacheBackground = function() {
        if(!this.imageData)
                return;

        // caching will be ignored since contents of the background image is re-fetching per frame
        if(this.params['syncinterval'] == 1)
                return;

        // copy pixels of background image to cache
        //
        var canvassize = this.canvas.width * this.canvas.height;
        var pixels = this.imageData.data;
        var i=0, j=0;
        while(i < canvassize) {
                this.bkgPixels[i] = (pixels[j] << 16) | (pixels[j+1] << 8) | pixels[j+2];
                i++;
                j += 4;
        }
};

/**
        Begin to generate a frame.
        @private
*/
Weather.prototype.beginEffects = function() {
        if(!this.imageData)
                return;

        // return immediately since caching is not used
        if(this.params['syncinterval'] == 1)
                return;

        // copy background pixels from cache
        //
        var canvassize = this.canvas.width * this.canvas.height;
        var imgPixels = this.imageData.data;
        var i=0, j=0;
        while(i < canvassize) {
                var color = this.bkgPixels[i];
                imgPixels[j    ] = (color >> 16) & 0xff;
                imgPixels[j + 1] = (color >> 8) & 0xff;
                imgPixels[j + 2] = color & 0xff;
                i++;
                j += 4;
        }
};

/**
        Draw weather effects on background.
        @private
*/
Weather.prototype.drawEffects = function() {
        if(this.params['fogon'])
                this.drawFog();

        if(this.params['rainon']) 
                this.drawRain();
};

/**
        End of generating a frame.
        @private
*/
Weather.prototype.endEffects = function() {
        if(!this.imageData)
                return;

        this.ctx.putImageData(this.imageData, 0, 0);
};

/**
        ------------------------------ Rain Effect ------------------------------
*/

/**
        Initialize rain drops.
        @private
*/
Weather.prototype.initRain = function() {
        var raindropnum = this.params['raindropnumber'];
        this.rain['raindropXs'] = new Array(raindropnum);
        this.rain['raindropYs'] = new Array(raindropnum);
        this.rain['raindropSpeeds'] = new Array(raindropnum);
        this.rain['raindropColors'] = new Array(raindropnum);
        this.rain['maxVisible'] = 0;

        var w = this.canvas.width;
        var h = this.canvas.height;
        var basespeed = this.params['rainspeed'];
        var diffspeed = this.params['raindiffspeed'];
        var xs = this.rain['raindropXs'];
        var ys = this.rain['raindropYs'];
        var speeds = this.rain['raindropSpeeds'];
        var colors = this.rain['raindropColors'];

        // generate initial position and falling speed for each raindrop
        //
        for(var i=0; i<raindropnum; i++) {
                xs[i] = Math.random() * w;
                ys[i] = Math.random() * h;
                speeds[i] = basespeed + Math.random() * diffspeed;
        }

        var color1 = parseInt('0x' + this.params['raincolor1'].substring(1));
        var color2 = parseInt('0x' + this.params['raincolor2'].substring(1));
        var r1 = (color1 & 0xff0000) >> 16;
        var g1 = (color1 & 0xff00) >> 8;
        var b1 = color1 & 0xff;
        var r2 = (color2 & 0xff0000) >> 16;
        var g2 = (color2 & 0xff00) >> 8;
        var b2 = color2 & 0xff;
        var diff = 255 / raindropnum;

        // interpolate and initialize color for each raindrop
        //
        var w1, w2;
        var r, g, b;
        var i = 0, j = 0;
        for(i=0; i<raindropnum; i++) {
                w1 = i * diff;
                w2 = 255 - w1;
                var r = ((w1 * r1 + w2 * r2) >> 8) & 0xff;
                var g = ((w1 * g1 + w2 * g2) >> 8) & 0xff;
                var b = ((w1 * b1 + w2 * b2) >> 8) & 0xff;
                colors[j++] = r << 16 | g << 8 | b;
        }
};

/**
        Draw rain drops.
        @private
*/
Weather.prototype.drawRain = function() {
        if(!this.imageData)
                return;

        var imagepixels = this.imageData.data;

        var w = this.canvas.width;
        var h = this.canvas.height;
        var xs = this.rain['raindropXs'];
        var ys = this.rain['raindropYs'];
        var speeds = this.rain['raindropSpeeds'];
        var colors = this.rain['raindropColors'];

        // calculate blending factors for a raindrop and the background pixels behind it
        //
        var rainfactor = this.params['raindensity'] / 256;
        rainfactor = rainfactor < 1.0 ? rainfactor : 1.0;
        var backfactor = 1.0 - rainfactor;
        var rf1 = rainfactor > 0.25 ? (rainfactor - 0.25) : 0;
        var bf1 = 1.0 - rf1;
        var rf2 = rainfactor > 0.375 ? (rainfactor - 0.375) : 0;
        var bf2 = 1.0 - rf2;
        var rf3 = rainfactor > 0.5 ? (rainfactor - 0.5) : 0;
        var bf3 = 1.0 - rf3;

        var lbound = h - 4;             // the lower boundary where a raindrop vanishes(be reset)
        var basespeed = this.params['rainspeed'];
        var total = this.params['raindropnumber'];
        var half = total / 2;

        var maxvis = this.rain['maxVisible'];
        maxvis += this.params['rainspeed'];
        maxvis = (maxvis < total) ? maxvis : total;
        this.rain['maxVisible'] = maxvis;

        // draw as small raindrops
        var i = 0, j = 0;
        while(i < half) {
                // update height value of the raindrop
                ys[i] += speeds[i];
                // if the raindrop arrives at the bottom, reset it to the top again
                if(ys[i] > lbound) {
                        ys[i] = Math.random() * (basespeed + 2);
                }

                // draw this raindrop if it is visible
                if(i <= maxvis) {
                        var x = ~~xs[i];
                        var y = ~~ys[i];

                        var raincolor = colors[j];
                        var rainr = (raincolor >> 16) & 0xff;
                        var raing = (raincolor >> 8) & 0xff;
                        var rainb = raincolor & 0xff;

                        var pix = (y * w + x) * 4;
                        var backr = imagepixels[pix];
                        var backg = imagepixels[pix + 1];
                        var backb = imagepixels[pix + 2];
                        imagepixels[pix    ] = (rainr * rf3 + backr * bf3) & 0xff;
                        imagepixels[pix + 1] = (raing * rf3 + backg * bf3) & 0xff;
                        imagepixels[pix + 2] = (rainb * rf3 + backr * bf3) & 0xff;

                        pix += w * 4;
                        backr = imagepixels[pix];
                        backg = imagepixels[pix + 1];
                        backb = imagepixels[pix + 2];
                        imagepixels[pix    ] = (rainr * rf2 + backr * bf2) & 0xff;
                        imagepixels[pix + 1] = (raing * rf2 + backg * bf2) & 0xff;
                        imagepixels[pix + 2] = (rainb * rf2 + backr * bf2) & 0xff;

                        pix += w * 4;
                        backr = imagepixels[pix];
                        backg = imagepixels[pix + 1];
                        backb = imagepixels[pix + 2];
                        imagepixels[pix    ] = (rainr * rf1 + backr * bf1) & 0xff;
                        imagepixels[pix + 1] = (raing * rf1 + backg * bf1) & 0xff;
                        imagepixels[pix + 2] = (rainb * rf1 + backr * bf1) & 0xff;
                }

                i++;
                j++;
        }

        // draw as big raindrops
        while(i < total) {
                // update height value of the raindrop
                // if it reaches the bottom, reset it to the top
                ys[i] += speeds[i];
                if(ys[i] > lbound) {
                        ys[i] = Math.random() * (basespeed + 2);
                }

                // draw this raindrop if it is visible
                if(i <= maxvis) {
                        var x = ~~xs[i];
                        var y = ~~ys[i];

                        var raincolor = colors[j];
                        var rainr = (raincolor >> 16) & 0xff;
                        var raing = (raincolor >> 8) & 0xff;
                        var rainb = raincolor & 0xff;

                        var pix = (y * w + x) * 4;
                        var backr = imagepixels[pix];
                        var backg = imagepixels[pix + 1];
                        var backb = imagepixels[pix + 2];
                        imagepixels[pix    ] = (rainr * rf3 + backr * bf3) & 0xff;
                        imagepixels[pix + 1] = (raing * rf3 + backg * bf3) & 0xff;
                        imagepixels[pix + 2] = (rainb * rf3 + backr * bf3) & 0xff;

                        pix += w * 4;
                        backr = imagepixels[pix];
                        backg = imagepixels[pix + 1];
                        backb = imagepixels[pix + 2];
                        imagepixels[pix    ] = (rainr * rf2 + backr * bf2) & 0xff;
                        imagepixels[pix + 1] = (raing * rf2 + backg * bf2) & 0xff;
                        imagepixels[pix + 2] = (rainb * rf2 + backr * bf2) & 0xff;

                        pix += w * 4;
                        backr = imagepixels[pix];
                        backg = imagepixels[pix + 1];
                        backb = imagepixels[pix + 2];
                        imagepixels[pix    ] = (rainr * rf1 + backr * bf1) & 0xff;
                        imagepixels[pix + 1] = (raing * rf1 + backg * bf1) & 0xff;
                        imagepixels[pix + 2] = (rainb * rf1 + backr * bf1) & 0xff;

                        pix += w * 4;
                        backr = imagepixels[pix];
                        backg = imagepixels[pix + 1];
                        backb = imagepixels[pix + 2];
                        imagepixels[pix    ] = (rainr * rainfactor + backr * backfactor) & 0xff;
                        imagepixels[pix + 1] = (raing * rainfactor + backg * backfactor) & 0xff;
                        imagepixels[pix + 2] = (rainb * rainfactor + backr * backfactor) & 0xff;

                        pix += w * 4;
                        backr = imagepixels[pix];
                        backg = imagepixels[pix + 1];
                        backb = imagepixels[pix + 2];
                        imagepixels[pix    ] = (rainr * rainfactor + backr * backfactor) & 0xff;
                        imagepixels[pix + 1] = (raing * rainfactor + backg * backfactor) & 0xff;
                        imagepixels[pix + 2] = (rainb * rainfactor + backr * backfactor) & 0xff;
                }

                i++;
                j++;
        }
};

/**
        ------------------------------ Fog Effect ------------------------------
*/

/**
        Initialize fog layers, rolling speeds and directions.
        @private
*/
Weather.prototype.initFog = function() {
        this.fog['densityMap'] = new Array(256);
        var map = this.fog['densityMap'];
        for(var i=0; i<256; i++) {
                map[i] = ~~(i / 2);
        }

        // prepare and initialize fog layers ...
        // ... which will later be used to perform dynamic fog effect
        //
        var canvassize = this.canvas.width * this.canvas.height;
        this.fog['texture'] = new Array(256 * 256);
        this.fog['layer1'] = new Array(canvassize);
        this.fog['layer2'] = new Array(canvassize);
        this.genFogTexture();
        this.copyFogTexture(this.fog['layer1'], this.canvas.width, this.canvas.height, this.fog['texture'], 256, 256);
        this.genFogTexture();
        this.copyFogTexture(this.fog['layer2'], this.canvas.width, this.canvas.height, this.fog['texture'], 256, 256);

        var direction = this.params['fogdirection'];
        var speed = this.params['fogspeed'] / 2;
        switch(direction)
        {
        case 'left':
                this.fog['speedX'] = speed;
                this.fog['speedY'] = 0;
                break;
        case 'right':
                this.fog['speedX'] = -speed;
                this.fog['speedY'] = 0;
                break;
        case 'up':
                this.fog['speedX'] = 0;
                this.fog['speedY'] = speed;
                break;
        case 'down':
                this.fog['speedX'] = 0;
                this.fog['speedY'] = -speed;
                break;
        default:
                this.fog['speedX'] = speed;
                this.fog['speedY'] = 0;
                break;
        }

        this.fog['layer1MovX'] = 0;
        this.fog['layer1MovY'] = 0;
        this.fog['layer2MovX'] = 0;
        this.fog['layer2MovY'] = 0;
};

/**
        Generate a single fog texture.
        @private
*/
Weather.prototype.genFogTexture = function() {
        var texture = this.fog['texture'];
        for(var i=0; i<texture.length; i++) {
                texture[i] = 0;
        }

        var density = this.params['fogdensity'];
        var mult = this.params['fogmult'] / 256;
        var min = this.params['fogmin'];
        var max = this.params['fogmax'];

        var step, halfstep;
        for(step=256; step>1; step=halfstep) {
                halfstep = step / 2;
                var d = step * density;

                for(var i=0; i<256; i+=step) {
                        var k = i * 256;
                        var l = ((i + step) % 256) * 256;

                        for(var j=0; j<256; j+=step) {
                                var m = (j + step) % 256;

                                /*
                                        v1 ----- v3
                                        |            |
                                        |    #   #
                                        |        |
                                        v2 --#-- v4
                                */
                                var v1 = texture[k + j];
                                var v2 = texture[l + j];
                                var v3 = texture[k + m];
                                var v4 = texture[l + m];

                                var n = ((i + halfstep) % 256) * 256;
                                var o = (j + halfstep) % 256;
                                // generate a random value at the center of v2, v4, refering to the average value of v2 and v4
                                texture[l + o] = this.randomize((v2+v4)/2, d, mult, min, max);
                                // generate a random value at the center of v3, v4, refering to the average value of v3 and v4
                                texture[n + m] = this.randomize((v3+v4)/2, d, mult, min, max);
                                // generate a random value at the center of v1, v2, v3, v4, refering to the average value of v1, v2, v3, v4
                                texture[n + o] = this.randomize((v1+v2+v3+v4)/4, d, mult, min, max);
                                // deal with pixels at the top-most row
                                if(i == 0) {
                                        texture[k + o] = this.randomize((v1+v3)/2, d, mult, min, max);
                                }
                                // deal with pixels at the left-most column
                                if(j == 0) {
                                        texture[n + j] = this.randomize((v1+v2)/2, d, mult, min, max);
                                }
                        }
                }
        }
};

/**
        @private
*/
Weather.prototype.randomize = function(v, l, mult, min, max) {
        v = (v + (Math.random() - 0.5) * l * mult);
        v = (v > min) ? v : min;
        v = (v < max) ? v : max;
        return v;
};

/**
        Copy stuff of fog texture with rescaling.
        @private
*/
Weather.prototype.copyFogTexture = function(dest, destwidth, destheight, src, srcwidth, srcheight) {
        var wratio = srcwidth / destwidth;
        var hratio = srcheight / destheight;
        var k = 0;
        for(var i=0; i<destheight; i++) {
                var srclinebase = (~~(i * hratio)) * srcwidth;
                for(var j=0; j<destwidth; j++) {
                        dest[k++] = src[srclinebase + (~~(j * wratio))];
                }
        }
};

/**
        Draw fog effect.
        @private
*/
Weather.prototype.drawFog = function() {
        if(!this.imageData)
                return;

        var imagepixels = this.imageData.data;

        var w = this.canvas.width;
        var h = this.canvas.height;
        var map = this.fog['densityMap'];

        var layer1 = this.fog['layer1'];
        var layer2 = this.fog['layer2'];

        // scroll fog layers on specified direction
        // make different moving speeds between layers to produce dynamic fog presentation
        //
        var speedx = this.fog['speedX'];
        var speedy = this.fog['speedY'];
        var xmov1 = this.fog['layer1MovX'];
        var ymov1 = this.fog['layer1MovY'];
        var xmov2 = this.fog['layer2MovX'];
        var ymov2 = this.fog['layer2MovY'];     
        xmov1 = (w + xmov1 + speedx) % w;
        ymov1 = (h + ymov1 + speedy) % h;
        xmov2 = (w + xmov2 + speedx / 3) % w;
        ymov2 = (h + ymov2 + speedy / 3) % h;
        this.fog['layer1MovX'] = xmov1;
        this.fog['layer1MovY'] = ymov1;
        this.fog['layer2MovX'] = xmov2;
        this.fog['layer2MovY'] = ymov2;
        xmov1 = ~~xmov1;
        ymov1 = ~~ymov1;
        xmov2 = ~~xmov2;
        ymov2 = ~~ymov2;

        // draw fog 
        var pix = 0;
        for(var i=0; i<h; i++) {
                var l1 = ((i + ymov1) % h) * w;
                var l2 = ((i + ymov2) % h) * w;

                for(var j=0; j<w; j++) {
                        var inte = Math.floor(  ( layer1[ l1 + ((j + xmov1) % w) ] + 
                                                                          layer2[ l2 + ((j + xmov2) % w) ] ) / 2  );
                        var fogi = map[inte];

                        // blend fog and background
                        var r = fogi + (imagepixels[pix    ] >> 1);
                        var g = fogi + (imagepixels[pix + 1] >> 1);
                        var b = fogi + (imagepixels[pix + 2] >> 1);
                        imagepixels[pix    ] = r;
                        imagepixels[pix + 1] = g;
                        imagepixels[pix + 2] = b;

                        pix += 4;
                }
        }
};

Weather.prototype.canvas = null;
Weather.prototype.ctx = null;
Weather.prototype.imageData = null;
Weather.prototype.bkgImage = null;
Weather.prototype.bkgPixels = null;
Weather.prototype.params = {};
Weather.prototype.rain = {};
Weather.prototype.fog = {};
Weather.prototype.timerId = 0;
Weather.prototype.past = 0;
Weather.prototype.frameCount = 0;
Weather.prototype.fps = 0;
Weather.prototype.syncFrameCount = 0;
Weather.prototype.shouldSync = false;