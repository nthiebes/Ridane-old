//////////////////////////////////////////////
// Variables                                //
//////////////////////////////////////////////
var levels = {
    level1: [
[[127,126,127,126,127,126,127,126,127,32,127,32,127,234,235,170,219,171,32,32,32,32,143,142,143,142,143,126,180,181,172,165,165,165,165,173,182,126,127,126,127,126,127,126,127,126,127,126,127,126,91,91,92,257,81,81,81,85,81,70,101,102,103,102,102,102,103,103,90,257,257,257],[143,142,143,142,143,142,143,142,143,142,143,142,143,82,70,234,235,236,32,32,32,32,127,126,127,126,127,142,143,142,164,165,173,181,181,182,143,142,143,142,148,149,149,149,150,142,143,142,143,142,101,102,80,81,81,81,81,101,90,70,70,70,70,70,0,0,0,0,106,107,257,257],[127,126,127,126,127,126,127,126,127,32,127,32,127,32,145,70,70,70,32,149,149,149,156,150,143,142,143,126,127,126,180,181,182,126,127,126,127,126,127,126,164,165,165,165,166,126,257,167,168,168,0,118,0,97,81,81,81,81,81,161,102,102,128,70,81,81,81,81,81,117,96,257],[143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,145,70,70,32,165,173,172,165,157,150,126,127,142,143,142,143,142,54,55,143,142,143,142,143,142,180,172,165,173,182,142,143,183,184,184,126,142,126,113,81,81,81,81,81,0,0,0,0,145,81,81,81,81,81,81,65,113],[127,126,127,148,149,150,127,126,127,32,127,32,127,32,127,69,70,70,32,165,157,156,165,165,157,149,149,150,127,126,127,69,66,65,72,126,127,126,127,126,127,164,173,182,127,126,127,126,127,126,127,126,127,85,81,81,81,81,81,218,219,219,219,0,90,165,165,165,165,165,81,85],[143,142,148,156,165,166,143,142,143,142,143,142,143,142,143,85,70,130,32,165,165,165,165,165,165,173,181,182,143,142,143,161,90,145,82,142,143,142,143,142,143,180,182,142,143,142,143,142,143,142,126,142,126,69,81,81,65,65,65,234,170,219,171,0,0,107,0,0,103,80,69,85],[127,148,156,165,165,157,149,149,150,32,127,32,127,32,127,101,102,103,32,181,172,165,165,165,165,166,127,126,127,126,127,126,127,107,108,126,127,90,70,33,127,126,127,126,127,126,127,126,127,126,127,69,85,65,202,203,203,203,204,65,234,235,236,81,81,0,0,0,0,0,85,69],[143,164,202,203,203,203,204,173,182,142,148,150,143,142,143,142,143,142,143,142,164,165,173,181,181,182,143,142,143,142,143,142,143,142,143,168,168,33,33,33,143,142,143,142,143,142,143,142,143,142,126,85,85,202,154,219,257,219,155,204,81,81,81,81,81,81,81,81,81,81,85,85],[127,164,218,219,171,235,236,166,127,148,156,166,127,32,127,32,127,32,127,32,180,181,182,126,127,126,127,257,127,126,127,126,127,167,168,168,168,169,33,33,127,126,127,126,127,126,127,126,127,126,127,101,85,234,235,235,170,219,171,236,81,81,81,81,81,81,81,81,81,81,85,69],[143,164,234,235,236,173,181,182,143,164,165,166,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,257,257,142,143,142,143,183,174,168,168,159,153,142,143,142,143,142,143,142,143,142,143,142,126,142,126,97,70,65,234,235,236,81,0,0,0,0,0,81,81,81,81,81,85,85],[127,164,165,165,173,182,127,126,127,164,165,157,149,150,127,32,127,32,127,32,127,32,127,126,127,126,257,257,127,126,127,126,127,126,167,168,168,168,169,126,127,126,127,126,127,126,127,126,127,126,127,126,127,113,80,131,102,80,81,69,65,65,65,65,72,129,129,129,129,129,85,69],[143,180,181,181,182,142,143,142,143,180,181,172,165,166,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,257,142,143,142,167,168,168,175,185,142,143,142,143,142,143,142,143,142,143,142,126,142,126,85,88,0,0,0,97,85,65,65,65,65,66,67,54,55,74,75,85,65],[127,126,127,126,127,126,127,126,127,32,127,180,181,182,127,32,127,32,151,152,152,153,127,126,127,126,127,126,127,126,127,148,149,150,183,174,168,159,153,126,127,126,127,126,127,126,257,257,127,126,127,126,127,126,127,126,127,126,113,128,65,65,65,65,65,70,70,70,70,70,65,65],[143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,167,168,219,169,143,142,143,142,143,142,143,142,148,156,165,166,143,183,184,184,185,142,143,142,143,142,143,142,143,142,143,142,126,142,126,142,126,142,126,142,85,81,145,97,93,90,70,70,70,70,70,70,65,65],[127,126,127,126,127,126,127,126,127,32,127,32,127,32,127,32,127,148,156,170,175,185,127,69,70,87,76,77,127,126,180,181,181,182,127,126,127,126,127,126,127,126,127,126,257,126,127,126,127,126,127,126,127,126,127,126,127,126,69,81,0,0,0,0,97,70,70,70,70,70,65,65],[143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,164,165,173,182,142,143,85,143,142,70,70,66,142,143,142,143,142,143,142,143,142,143,142,143,257,257,257,257,142,143,142,143,142,126,142,126,142,126,142,126,142,69,81,0,0,65,65,113,70,70,70,70,70,65,65]],[[0,0,0,0,756,757,0,0,0,254,84,85,70,0,253,0,0,253,82,93,108,109,106,107,104,105,341,342,0,0,0,0,0,0,0,0,0,670,0,463,0,0,222,138,139,160,161,102,103,90,274,272,226,270,257,258,84,343,344,100,0,0,0,0,359,360,0,0,256,0,0,0],[0,0,0,0,0,0,359,360,239,0,100,101,90,672,269,253,253,269,98,99,124,125,122,123,120,121,357,358,0,0,0,773,0,0,0,413,615,478,479,0,0,0,0,270,0,176,177,118,119,106,0,374,272,273,273,274,100,359,360,116,117,118,119,118,118,118,119,119,272,226,0,0],[357,358,0,0,0,0,0,240,241,242,116,117,106,107,0,269,269,0,114,115,140,141,138,139,136,137,0,0,0,0,0,0,0,614,414,381,0,494,495,0,239,0,0,0,0,192,193,134,135,122,123,370,96,0,0,0,116,117,106,132,133,134,135,133,134,134,135,135,122,272,226,0],[241,242,352,353,354,355,356,256,257,258,132,133,122,123,144,222,0,223,72,73,0,0,0,0,0,0,0,0,0,0,0,53,241,242,429,397,414,0,0,0,0,0,0,0,240,210,227,274,774,138,139,390,112,240,242,0,132,133,122,123,118,118,144,240,0,0,357,358,138,139,112,226],[227,274,0,0,0,0,240,210,257,211,242,0,138,139,160,327,328,239,72,73,0,0,0,0,0,0,0,0,0,0,84,0,226,211,242,0,399,0,0,0,0,269,0,269,272,273,274,0,691,0,0,0,68,256,258,0,0,0,138,139,134,134,160,161,0,0,272,273,289,242,84,256],[355,356,269,0,269,0,272,273,273,273,274,0,0,692,84,343,344,0,88,89,0,270,0,0,0,0,0,0,0,0,100,688,0,226,258,0,0,0,0,0,0,0,55,0,0,0,0,0,0,0,0,0,59,272,274,0,0,0,0,0,752,753,176,177,106,274,0,0,272,274,84,210],[242,0,0,0,0,269,269,0,0,0,0,0,0,0,100,359,360,108,109,105,0,0,0,0,0,0,0,0,0,0,116,117,106,272,274,62,63,594,0,130,131,80,82,72,73,0,0,0,0,0,0,688,239,0,0,240,241,241,242,0,0,222,192,193,122,123,46,47,119,96,84,257],[258,269,0,0,0,0,0,0,0,357,358,0,240,242,116,117,118,124,125,121,0,0,0,0,0,0,240,241,242,0,132,133,122,123,124,46,47,144,85,146,147,96,97,88,89,0,355,356,0,0,84,0,0,240,241,210,243,227,274,0,0,0,0,0,138,139,110,111,135,112,68,273],[274,0,0,0,0,0,0,0,0,0,0,0,256,258,132,133,134,140,141,0,0,0,0,0,0,0,256,0,211,242,0,599,138,139,140,94,95,160,161,162,163,112,113,72,73,707,0,0,0,0,100,0,0,272,273,273,273,274,674,0,0,0,0,0,0,0,420,0,0,68,84,240],[360,269,0,222,0,0,0,0,0,0,0,0,272,274,0,0,0,0,0,0,0,0,0,0,240,241,210,0,243,258,0,0,0,355,356,383,381,176,177,178,179,84,85,88,73,0,0,708,0,0,116,117,96,791,0,0,673,0,0,0,54,55,54,55,81,0,0,0,0,84,84,256],[0,0,0,0,0,269,269,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,272,226,275,254,227,289,241,242,0,0,0,399,399,192,193,194,195,100,101,104,105,357,358,240,242,0,132,133,112,0,970,672,790,638,68,0,345,346,347,348,0,0,0,0,0,59,68,256],[0,0,269,0,269,0,0,0,0,0,0,0,0,355,356,0,0,0,0,0,0,0,0,0,0,272,273,273,289,210,222,258,0,413,578,430,399,0,0,577,0,116,117,120,121,240,241,210,258,352,353,354,84,758,759,147,118,96,84,0,361,362,363,364,327,328,323,324,0,339,100,101],[358,0,0,690,0,0,240,241,241,242,41,0,0,0,0,361,362,363,364,0,0,0,0,0,0,0,0,0,272,273,273,274,0,415,463,0,415,431,0,0,0,132,133,136,137,256,0,0,258,0,0,0,100,101,104,163,134,112,100,0,359,360,341,342,343,344,339,340,328,355,116,117],[706,355,356,0,0,0,256,257,0,0,0,0,0,0,0,0,0,240,241,242,0,0,0,53,54,55,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,241,288,273,273,274,0,148,150,116,117,120,121,389,324,116,144,0,0,357,358,359,360,355,356,344,243,132,133],[340,688,0,0,355,356,68,69,70,0,0,0,0,0,41,0,0,272,273,274,0,0,68,0,0,241,242,0,0,0,0,0,0,0,0,0,0,0,0,0,240,241,241,210,0,258,0,0,148,149,156,166,132,133,136,137,0,340,132,160,161,108,109,106,355,356,0,359,360,304,305,306],[364,0,0,0,0,0,84,85,70,82,0,0,0,0,0,0,0,0,0,0,0,0,84,0,87,257,211,241,242,87,76,77,0,0,0,0,0,0,0,240,210,0,0,688,0,211,242,0,164,165,165,157,150,0,0,0,0,356,0,176,177,124,125,122,0,275,325,326,0,320,321,322]],[[325,326,304,305,306,0,343,344,223,0,240,210,227,274,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,772,256,227,0,0,0,0,0,0,0,0,0,0,0,0,0,690,0,0,309,310,0,345,346,347],[341,342,320,321,322,323,324,0,0,0,272,273,274,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,223,0,0,0,0,0,0,0,272,274,391,0,375,0,0,0,0,0,0,0,0,0,0,0,0,0,325,326,0,361,362,363],[0,0,336,337,338,339,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,38,39,40,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,238,240,242,341,342,0,0,674,688],[323,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,240,327,328,56,57,0,43,44,45,0,253,0,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,254,210,211,241,241,242,0,272,673],[339,340,253,0,253,0,0,0,0,309,310,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,272,343,344,242,51,58,59,60,61,38,38,39,40,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,736,737,0,272,226,227,273,0,0,0,0,0],[0,0,0,0,0,253,253,0,0,325,326,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,576,0,359,360,258,67,74,75,76,77,54,54,0,56,57,0,323,324,0,0,52,58,223,0,0,0,0,0,0,0,0,0,0,0,272,704,62,63,0,688,240,0],[0,253,0,0,0,0,0,0,0,341,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,592,0,0,272,274,62,63,0,736,737,0,0,304,305,306,0,339,340,0,0,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,78,79,0,0,256,373],[328,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,323,324,78,79,0,752,753,0,0,320,321,322,309,310,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,272,0],[344,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,339,340,0,0,0,0,0,0,0,336,337,338,325,326,0,0,304,305,306,0,0,0,0,0,0,0,37,38,39,38,39,40,41,0,0,0,0,0,673],[310,0,0,0,0,253,253,0,0,0,0,0,0,323,324,0,0,0,0,0,0,0,0,0,0,0,0,238,0,0,0,0,0,0,0,0,0,0,0,0,0,0,352,353,354,341,342,0,0,320,321,322,0,0,0,0,0,0,52,53,329,330,331,332,56,57,0,0,0,0,0,0],[326,0,253,0,253,0,0,0,0,0,0,0,0,339,340,329,330,331,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,373,0,0,0,0,0,0,0,0,0,336,337,338,0,0,0,0,0,0,240,242,327,328,309,310,672,51,38,39,58,323,324,0],[342,323,324,0,0,0,0,0,0,0,0,0,0,0,0,345,346,347,348,0,0,0,0,329,330,331,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,256,258,343,344,325,326,673,0,0,0,0,0,340,272],[0,339,340,0,323,324,0,37,39,40,41,0,0,0,0,0,0,0,0,0,0,0,0,345,346,347,348,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,272,274,0,0,0,0,323,324,0,327,0,0,356,0],[324,0,309,310,339,340,52,53,55,56,57,0,0,0,0,0,0,0,0,0,0,0,52,361,362,363,364,61,38,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,323,84,0,240,241,242,0,0,339,340,0,343,0,0,0,0],[323,310,325,326,327,328,0,0,0,72,51,38,39,40,0,0,0,0,0,0,0,0,0,240,241,323,324,0,54,55,56,61,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,339,68,0,272,273,274,0,0,0,0,309,310,0,0,0,0],[325,326,341,342,343,344,0,0,0,0,67,54,55,56,57,0,0,0,0,0,0,0,0,256,257,339,340,0,0,672,673,0,56,57,0,0,0,0,0,0,0,0,0,0,221,0,0,0,0,0,0,0,0,0,0,0,355,68,773,0,0,0,0,0,309,310,0,329,330,331,332,0]],[[192,32],[224,32],[256,32],[320,32],[672,32],[704,32],[800,32],[832,32],[864,32],[1184,32],[1216,32],[1376,32],[1440,32],[1568,32],[1792,32],[0,64],[32,64],[320,64],[640,64],[736,64],[768,64],[1184,64],[1216,64],[1280,64],[1472,64],[1504,64],[1568,64],[1600,64],[1664,64],[1792,64],[64,96],[96,96],[128,96],[160,96],[192,96],[352,96],[384,96],[608,96],[992,96],[1024,96],[1056,96],[1536,96],[1600,96],[1664,96],[1824,96],[1856,96],[416,128],[608,128],[960,128],[1088,128],[1312,128],[1376,128],[1664,128],[1888,128],[0,160],[32,160],[64,160],[128,160],[448,160],[608,160],[672,160],[960,160],[1088,160],[1184,160],[1216,160],[1248,160],[1280,160],[1312,160],[1344,160],[1376,160],[1664,160],[1920,160],[1952,160],[1984,160],[2112,160],[2144,160],[160,192],[192,192],[448,192],[608,192],[960,192],[1088,192],[1184,192],[1408,192],[1600,192],[1632,192],[1664,192],[2016,192],[2048,192],[2080,192],[2176,192],[32,224],[288,224],[320,224],[448,224],[608,224],[960,224],[992,224],[1024,224],[1088,224],[1184,224],[1408,224],[1472,224],[1504,224],[1600,224],[2080,224],[2176,224],[480,256],[512,256],[544,256],[576,256],[1056,256],[1088,256],[1184,256],[1408,256],[1440,256],[1600,256],[2208,256],[0,288],[32,288],[1056,288],[1088,288],[1184,288],[1280,288],[1408,288],[1504,288],[1600,288],[1632,288],[1664,288],[1696,288],[1920,288],[1952,288],[1984,288],[2016,288],[2208,288],[160,320],[192,320],[864,320],[1216,320],[1248,320],[1312,320],[1408,320],[1440,320],[1472,320],[1632,320],[1728,320],[1792,320],[1824,320],[1856,320],[1888,320],[2048,320],[2208,320],[64,352],[128,352],[416,352],[448,352],[1088,352],[1248,352],[1312,352],[1408,352],[1568,352],[1600,352],[1632,352],[1760,352],[2080,352],[2112,352],[2144,352],[2176,352],[0,384],[512,384],[544,384],[1184,384],[1344,384],[1376,384],[1664,384],[1792,384],[32,416],[64,416],[256,416],[736,416],[768,416],[800,416],[832,416],[1664,416],[1760,416],[1824,416],[0,448],[128,448],[160,448],[192,448],[224,448],[288,448],[704,448],[864,448],[896,448],[928,448],[1696,448],[1728,448],[1824,448],[0,480],[192,480],[320,480],[352,480],[384,480],[704,480],[960,480],[992,480],[1792,480]]
],
    level2: [
[[127,126,127,126,127,126,127,126,127,32,127,32,127,234,235,170,219,171,32,32,32,32,143,142,143,142,143,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,142,143,142,143,142,143,142,143,142,143,142,143,82,70,234,235,236,32,32,32,32,127,126,127,126,127,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,126,127,126,127,126,127,126,127,32,127,32,127,32,145,70,70,70,32,149,149,149,156,150,143,142,143,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,145,70,70,32,165,173,172,165,157,150,126,127,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,126,127,148,149,150,127,126,127,32,127,32,127,32,127,69,70,70,32,165,157,156,165,165,157,149,149,150,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,142,148,156,165,166,143,142,143,142,143,142,143,142,143,85,70,130,32,165,165,165,165,165,165,173,181,182,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,148,156,165,165,157,149,149,150,32,127,32,127,32,127,101,102,103,32,181,172,165,165,165,165,166,127,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,164,202,203,203,203,204,173,182,142,148,150,143,142,143,142,143,142,143,142,164,165,173,181,181,182,143,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,164,218,219,171,235,236,166,127,148,156,166,127,32,127,32,127,32,127,32,180,181,182,126,127,126,127,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,164,234,235,236,173,181,182,143,164,165,166,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,164,165,165,173,182,127,126,127,164,165,157,149,150,127,32,127,32,127,32,127,32,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,180,181,181,182,142,143,142,143,180,181,172,165,166,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,126,127,126,127,126,127,126,127,32,127,180,181,182,127,32,127,32,151,152,152,153,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,167,168,219,169,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,126,127,126,127,126,127,126,127,32,127,32,127,32,127,32,127,148,156,170,175,185,127,69,70,87,127,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,164,165,173,182,142,143,85,143,142,143,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,254,84,85,70,0,253,0,0,253,82,93,108,109,106,107,104,105,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,359,360,239,0,100,101,90,0,269,253,253,269,98,99,124,125,122,123,120,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[357,358,0,0,0,0,0,240,241,242,116,117,106,107,0,269,269,0,114,115,140,141,138,139,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,352,353,354,355,356,256,257,258,132,133,122,123,144,222,0,223,72,73,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,240,210,257,211,242,0,138,139,160,327,328,239,72,73,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[355,356,269,0,269,0,272,273,273,273,274,0,0,259,84,343,344,0,88,89,0,270,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,269,269,0,0,0,0,0,0,0,100,359,360,108,109,105,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,269,0,0,0,0,0,0,0,357,358,0,240,242,116,117,118,124,125,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,256,258,132,133,134,140,141,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[360,269,0,222,0,0,0,0,0,0,0,0,272,274,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,269,269,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,269,0,269,0,0,0,0,0,0,0,0,355,356,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[358,0,0,243,0,0,0,0,0,0,41,0,0,0,0,361,362,363,364,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,355,356,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,241,242,0,0,0,53,54,55,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[340,275,0,0,355,356,68,69,70,0,0,0,0,0,41,0,0,272,273,274,0,0,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[364,0,0,0,0,0,84,85,70,82,0,0,0,0,0,0,0,0,0,0,0,0,84,0,87,34,33,82,87,87,76,77,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[325,326,304,305,306,0,343,344,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[341,342,320,321,322,323,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,336,337,338,339,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[323,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[339,340,253,0,253,0,0,0,0,309,310,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,253,253,0,0,325,326,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,253,0,0,0,0,0,0,0,341,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[328,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[344,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[310,0,0,0,0,253,253,0,0,0,0,0,0,323,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[326,0,253,0,253,0,0,0,0,0,0,0,0,339,340,329,330,331,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[342,323,324,0,0,0,0,0,0,0,0,0,0,0,0,345,346,347,348,0,0,0,0,329,330,331,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,339,340,0,323,324,0,37,39,40,41,0,0,0,0,0,0,0,0,0,0,0,0,345,346,347,348,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[324,0,309,310,339,340,52,53,55,56,57,0,0,0,0,0,0,0,0,0,0,0,52,361,362,363,364,61,38,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[323,310,325,326,327,328,0,0,0,72,51,38,39,40,0,0,0,0,0,0,0,0,0,0,0,0,76,77,54,55,56,61,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[325,326,341,342,343,344,0,0,0,0,67,54,55,56,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[288,0],[800,0],[192,32],[224,32],[256,32],[320,32],[672,32],[704,32],[800,32],[0,64],[32,64],[320,64],[640,64],[736,64],[768,64],[64,96],[96,96],[128,96],[160,96],[192,96],[352,96],[384,96],[608,96],[416,128],[608,128],[0,160],[32,160],[64,160],[128,160],[448,160],[608,160],[672,160],[160,192],[192,192],[448,192],[608,192],[32,224],[288,224],[320,224],[448,224],[608,224],[480,256],[512,256],[544,256],[576,256],[0,288],[32,288],[160,320],[192,320],[64,352],[128,352],[416,352],[448,352],[0,384],[512,384],[544,384],[32,416],[64,416],[256,416],[736,416],[768,416],[800,416],[832,416],[0,448],[128,448],[160,448],[192,448],[224,448],[288,448],[704,448],[864,448],[896,448],[928,448],[0,480],[192,480],[320,480],[352,480],[384,480],[704,480],[960,480],[992,480]]
    ]
};

var currentLevel = 'level1';
var ground1 = levels[currentLevel][0];
var ground2 = levels[currentLevel][1];
var top1 = levels[currentLevel][2];
var blockedPositions = levels[currentLevel][3];
var tileSize = 32;
var rowTileCount = ground1.length;
var colTileCount = ground1[0].length;
var imageNumTiles = 16;
var tilesetImage;
var mapOffset = 0;
var mapOffset2 = 0;
var lastTime;
var fps = 0;
var pause = false;
var gameWidth = document.getElementById('inner-wrapper').offsetWidth;
var gameHeight = document.getElementById('inner-wrapper').offsetHeight;
var innerHp = document.getElementById('inner-hp');
var rain = document.getElementById('rain');
var soundElement = document.getElementById('sound');
var moveRight = false;
var fpsELement = document.getElementById('fps');
var leftElement = document.getElementById('left');
var rightElement = document.getElementById('right');
var spritePath = 'img/sprites.png';
var animationPath = 'img/animatedTiles.png';
var bullets = [];
var enemies = [];
var animations = [];
var blocked = [];
var explosions = [];
var lastFire = Date.now();
var playerInFight = false;
var gameTime = 0;
var hitEnemy = false;
var terrainPattern;
var sound = false;
var direction = 'right';
var playerSpeed = 120; //120
var bulletSpeed = 500;
var collision = false;
var gameStarted = false;
var soundStarted = false;
var helpMenu = '';


//////////////////////////////////////////////
// Define sounds                            //
//////////////////////////////////////////////
$.mbAudio.sounds = {
    effectSprite: {
        id    : "effectSprite",
        ogg   : "sounds/effectSprite.ogg",
        mp3   : "sounds/effectSprite.mp3",
        sprite: {
            start               : {id: "start", start: 12.3, end: 17, loop: false},
            hit1                : {id: "hit1", start: 18, end: 19, loop: false},
            hit2                : {id: "hit2", start: 20, end: 21, loop: false}
        }
    },

    effectSprite2: {
        id    : "effectSprite2",
        ogg   : "sounds/effectSprite.ogg",
        mp3   : "sounds/effectSprite.mp3",
        sprite: {
            thunderstorm        : {id: "thunderstorm", start: 0, end: 12.25, loop: true},
            grunt1              : {id: "grunt1", start: 22, end: 22.5, loop: false},
            grunt2              : {id: "grunt2", start: 23, end: 23.5, loop: false},
            grunt3              : {id: "grunt3", start: 24, end: 25, loop: false},
            grunt4              : {id: "grunt4", start: 25, end: 26, loop: false},
            grunt5              : {id: "grunt5", start: 27, end: 28, loop: false}
        }
    },

    backgroundSprite: {
        id    : "backgroundSprite",
        ogg   : "sounds/backgroundSprite.ogg",
        mp3   : "sounds/backgroundSprite.mp3",
        sprite: {
            intro       : {id: "intro", start: 0, end: 114, loop: true},
            level1      : {id: "level1", start: 115, end: 253, loop: true}
        }
    }
};

function audioIsReady(){
    // Sound loaded
    soundStarted = true;
    if(isStandAlone || !isDevice){
        if( !gameStarted ){
            $.mbAudio.play('backgroundSprite', 'intro');
            $.mbAudio.play('effectSprite2', 'thunderstorm');
        } else{
            $.mbAudio.play('backgroundSprite', currentLevel);
        }
    }
}


//////////////////////////////////////////////
// Rain                                     //
//////////////////////////////////////////////
var particules = [];
var gouttes = [];
var nombrebase = 5;
var nombreb = 1;
var raining = true;
var controls = {
    rain : 2,
    Object : "Nothing",
    alpha : 0,
    color : 200,
    auto : false,
    opacity : 0.5,
    saturation : 20,
    lightness : 50,
    back : 100,
    red : 0,
    green : 0,
    blue : 0,
    multi : false,
    speed : 2
};

function Rain( X, Y, nombre ){
    if (!nombre) {
        nombre = nombreb;
    }
    while (nombre--) {
        particules.push( 
        {
            vitesseX : (Math.random() * 0.25),
            vitesseY : (Math.random() * 9) + 1,
            X : X,
            Y : Y,
            alpha : 1,
            couleur : "hsla(" + controls.color + "," + controls.saturation + "%, " + controls.lightness + "%," + controls.opacity + ")",
        })
    }
}

function explosion( X, Y, couleur, nombre ){
    if (!nombre) {
        nombre = nombrebase;
    }
    while (nombre--) {
        gouttes.push( 
        {
            vitesseX : (Math.random() * 4-2 ),
            vitesseY : (Math.random() * -4 ),
            X : X,
            Y : Y,
            radius : 0.65 + Math.floor(Math.random() *1.6),
            alpha : 1,
            couleur : couleur
        })
    }
}


//////////////////////////////////////////////
// Create player                            //
//////////////////////////////////////////////
var player = {
    health: playerAttr.nudeGuy.health,
    currentHealth: playerAttr.nudeGuy.health,
    healthGeneration: playerAttr.nudeGuy.healthGeneration,
    damage: playerAttr.nudeGuy.damage,
    spriteOffset: playerAttr.nudeGuy.spriteOffset,
    spriteHeight: playerAttr.nudeGuy.spriteHeight,
    hitbox: playerAttr.nudeGuy.hitbox,
    walkAnimationSpeed: playerAttr.nudeGuy.walkAnimationSpeed,
    fightAnimationSpeed: playerAttr.nudeGuy.fightAnimationSpeed,
    hitPlayer: false,
    pos: [25, 215],
    sprite: new Sprite(spritePath, [0, 0], [151, 46], 0, [0], 'horizontal', false, false) // url, pos, size, speed, frames, dir, once, inProgress
};


//////////////////////////////////////////////
// Create enemies                           //
//////////////////////////////////////////////
enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [400, 400],
    health: enemyAttr.zombie.health,
    currentHealth: enemyAttr.zombie.health,
    damage: enemyAttr.zombie.damage,
    aggroRange: enemyAttr.zombie.aggroRange,
    spriteOffset: enemyAttr.zombie.spriteOffset,
    spriteHeight: enemyAttr.zombie.spriteHeight,
    hitbox: enemyAttr.zombie.hitbox,
    walkAnimationSpeed: enemyAttr.zombie.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.zombie.fightAnimationSpeed,
    speed: enemyAttr.zombie.speed,
    sprite: new Sprite(spritePath, [enemyAttr.zombie.spriteOffset, enemyAttr.zombie.spriteHeight], [151, 46], 0, [0], 'horizontal', false, false)
});

enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [700, 170],
    health: enemyAttr.zombie.health,
    currentHealth: enemyAttr.zombie.health,
    damage: enemyAttr.zombie.damage,
    aggroRange: enemyAttr.zombie.aggroRange,
    spriteOffset: enemyAttr.zombie.spriteOffset,
    spriteHeight: enemyAttr.zombie.spriteHeight,
    hitbox: enemyAttr.zombie.hitbox,
    walkAnimationSpeed: enemyAttr.zombie.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.zombie.fightAnimationSpeed,
    speed: enemyAttr.zombie.speed,
    sprite: new Sprite(spritePath, [enemyAttr.zombie.spriteOffset, 0], [151, 46], 0, [0], 'horizontal', false, false)
});

enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [1270, 60],
    health: enemyAttr.nudeGuy.health,
    currentHealth: enemyAttr.nudeGuy.health,
    damage: enemyAttr.nudeGuy.damage,
    aggroRange: enemyAttr.nudeGuy.aggroRange,
    spriteOffset: enemyAttr.nudeGuy.spriteOffset,
    spriteHeight: enemyAttr.nudeGuy.spriteHeight,
    hitbox: enemyAttr.nudeGuy.hitbox,
    walkAnimationSpeed: enemyAttr.nudeGuy.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.nudeGuy.fightAnimationSpeed,
    speed: enemyAttr.nudeGuy.speed,
    sprite: new Sprite(spritePath, [enemyAttr.nudeGuy.spriteOffset, enemyAttr.zombie.spriteHeight], [151, 46], 0, [0], 'horizontal', false, false)
});

enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [1705, 270],
    health: enemyAttr.nudeGuy.health,
    currentHealth: enemyAttr.nudeGuy.health,
    damage: enemyAttr.nudeGuy.damage,
    aggroRange: enemyAttr.nudeGuy.aggroRange,
    spriteOffset: enemyAttr.nudeGuy.spriteOffset,
    spriteHeight: enemyAttr.nudeGuy.spriteHeight,
    hitbox: enemyAttr.nudeGuy.hitbox,
    walkAnimationSpeed: enemyAttr.nudeGuy.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.nudeGuy.fightAnimationSpeed,
    speed: enemyAttr.nudeGuy.speed,
    sprite: new Sprite(spritePath, [enemyAttr.nudeGuy.spriteOffset, enemyAttr.zombie.spriteHeight], [151, 46], 0, [0], 'horizontal', false, false)
});

enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [1150, 425],
    health: enemyAttr.zombie.health,
    currentHealth: enemyAttr.zombie.health,
    damage: enemyAttr.zombie.damage,
    aggroRange: enemyAttr.zombie.aggroRange,
    spriteOffset: enemyAttr.zombie.spriteOffset,
    spriteHeight: enemyAttr.zombie.spriteHeight,
    hitbox: enemyAttr.zombie.hitbox,
    walkAnimationSpeed: enemyAttr.zombie.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.zombie.fightAnimationSpeed,
    speed: enemyAttr.zombie.speed,
    sprite: new Sprite(spritePath, [enemyAttr.zombie.spriteOffset, 0], [151, 46], 0, [0], 'horizontal', false, false)
});

enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [1480, 350],
    health: enemyAttr.zombie.health,
    currentHealth: enemyAttr.zombie.health,
    damage: enemyAttr.zombie.damage,
    aggroRange: enemyAttr.zombie.aggroRange,
    spriteOffset: enemyAttr.zombie.spriteOffset,
    spriteHeight: enemyAttr.zombie.spriteHeight,
    hitbox: enemyAttr.zombie.hitbox,
    walkAnimationSpeed: enemyAttr.zombie.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.zombie.fightAnimationSpeed,
    speed: enemyAttr.zombie.speed,
    sprite: new Sprite(spritePath, [enemyAttr.zombie.spriteOffset, enemyAttr.zombie.spriteHeight], [151, 46], 0, [0], 'horizontal', false, false)
});

enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [2100, 260],
    health: enemyAttr.zombie.health,
    currentHealth: enemyAttr.zombie.health,
    damage: enemyAttr.zombie.damage,
    aggroRange: enemyAttr.zombie.aggroRange,
    spriteOffset: enemyAttr.zombie.spriteOffset,
    spriteHeight: enemyAttr.zombie.spriteHeight,
    hitbox: enemyAttr.zombie.hitbox,
    walkAnimationSpeed: enemyAttr.zombie.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.zombie.fightAnimationSpeed,
    speed: enemyAttr.zombie.speed,
    sprite: new Sprite(spritePath, [enemyAttr.zombie.spriteOffset, enemyAttr.zombie.spriteHeight], [151, 46], 0, [0], 'horizontal', false, false)
});


//////////////////////////////////////////////
// Create animations                        //
//////////////////////////////////////////////
animations.push({
    pos: [1728, 282],
    sprite: new Sprite(animationPath, [0, 0], [32, 64], 7, [0, 1, 2, 3, 4, 5])
});


//////////////////////////////////////////////
// Main game loop                           //
//////////////////////////////////////////////
function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    if( !pause ){
        update(dt);
        render();
    }

    /*delta = (new Date().getTime() - lastTime)/1000;
    if( fps > Math.floor(1/delta) ){

        fpsELement.innerHTML = fps;
    }
    fps = Math.floor(1/delta);*/

    lastTime = now;

    requestAnimFrame(main);
}


//////////////////////////////////////////////
// Update game objects                      //
//////////////////////////////////////////////
function update(dt) {
    gameTime += dt;

    updateEntities(dt);

    handleInput(dt);
    
    checkCollisions();

    checkHealth(dt);

    playerHitting();

    //console.log( player.pos[0] + mapOffset, player.pos[1] + mapOffset2 );

    // Rain
    if( raining ){
        var particuleslocales = particules;
        var goutteslocales = gouttes;
        
        for (var i = 0, particulesactives; particulesactives = particuleslocales[i]; i++) {
            particulesactives.X += particulesactives.vitesseX;
            particulesactives.Y += particulesactives.vitesseY+5;
            if (particulesactives.Y > rain.height-15) {
                particuleslocales.splice(i--, 1);
                explosion(particulesactives.X, particulesactives.Y, particulesactives.couleur);
            }
        }

        var i = controls.rain;
        while (i--) {
            Rain(Math.floor((Math.random()*rain.width)), -15);
        }
    }
}


//////////////////////////////////////////////
// Draw ground layers 1 and 2               //
//////////////////////////////////////////////
function drawImage(){
    for (var r = 0; r < rowTileCount; r++) {
        
        for (var c = 0; c < colTileCount; c++) {
            var tile = ground1[ r ][ c ];
            var tileRow = (tile / imageNumTiles) | 0;
            var tileCol = (tile % imageNumTiles) | 0;

            ctx2.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);

            tile = ground2[ r ][ c ];
            tileRow = (tile / imageNumTiles) | 0;
            tileCol = (tile % imageNumTiles) | 0;

            ctx2.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
        }
    }
}


//////////////////////////////////////////////
// Draw top layer                           //
//////////////////////////////////////////////
function drawImage2(){
    for (var r = 0; r < rowTileCount; r++) {
        
        for (var c = 0; c < colTileCount; c++) {
            var tile = top1[ r ][ c ];
            var tileRow = (tile / imageNumTiles) | 0;
            var tileCol = (tile % imageNumTiles) | 0;

            ctx3.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
        }
    }
}


//////////////////////////////////////////////
// Handle input                             //
//////////////////////////////////////////////
function handleInput(dt) {

    // Set movement values
    if( input.isDown('UP') || input.isDown('DOWN') || input.isDown('LEFT') || input.isDown('RIGHT') ){
        player.sprite.frames = [0, 1, 2, 3];
        player.sprite.speed = player.walkAnimationSpeed;
        if( player.sprite.inProgress ){
            player.sprite._index = 0;
        }
        player.sprite.inProgress = false;
        var movement = Math.floor(playerSpeed * dt);
    }

    // Move left
    if( input.isDown('LEFT') ){
        player.sprite.pos = [player.spriteOffset, player.spriteHeight*3];
        direction = 'left';

        // Check collision
        collision = false;
        for(var i=0; i<blocked.length; i++) {
            if( boxCollides(blocked[i].pos, blocked[i].sprite.size, [ player.pos[0] - Math.floor(playerSpeed * dt) + player.hitbox[0], player.pos[1] ], [ player.hitbox[1], player.spriteHeight ]) ){
                collision = true;
            }
        }
        for( var i=0; i<enemies.length; i++ ){
            if( boxCollides([enemies[i].pos[0] + enemies[i].hitbox[0], enemies[i].pos[1]], [enemies[i].hitbox[1], enemies[i].spriteHeight], [ player.pos[0] - Math.floor(playerSpeed * dt) + player.hitbox[0], player.pos[1] ], [ player.hitbox[1], player.spriteHeight ]) ){
                collision = true;
            }
        }

        if( !collision ){
            if( player.pos[0] + player.hitbox[0] < gameWidth / 2 && player.pos[0] + player.hitbox[0] > (gameWidth / 2) - 10 && mapOffset > 0 ){
                // Move map not player
                mapOffset -= movement;

                // Don't move too far
                if( mapOffset < 0 ){
                    movement = movement + mapOffset;
                    mapOffset = 0;
                }

                canvas2.style.left = parseInt(canvas2.style.left) + movement + 'px';
                canvas3.style.left = parseInt(canvas3.style.left) + movement + 'px';
                for(var i=0; i<blocked.length; i++) {
                    blocked[i].pos[0] += movement;
                }
                for(var i=0; i<enemies.length; i++) {
                    enemies[i].pos[0] += movement;
                }
                for(var i=0; i<animations.length; i++) {
                    animations[i].pos[0] += movement;
                }
            } else{
                // Move player
                player.pos[0] -= movement;
            }
        }
        collision = false;  
    }

    // Move right
    if( input.isDown('RIGHT') ){
        player.sprite.pos = [player.spriteOffset, player.spriteHeight*2];
        direction = 'right';
        
        // Check collision
        collision = false;
        for(var i=0; i<blocked.length; i++) {
            if(boxCollides(blocked[i].pos, blocked[i].sprite.size, [ player.pos[0] + Math.floor(playerSpeed * dt) + player.hitbox[0], player.pos[1] ], [ player.hitbox[1], player.spriteHeight ])) {
                collision = true;
            }
        }
        for( var i=0; i<enemies.length; i++ ){
            if( boxCollides([enemies[i].pos[0] + enemies[i].hitbox[0], enemies[i].pos[1]], [enemies[i].hitbox[1], enemies[i].spriteHeight], [ player.pos[0] + Math.floor(playerSpeed * dt) + player.hitbox[0], player.pos[1] ], [ player.hitbox[1], player.spriteHeight ]) ){
                collision = true;
            }
        }

        if( !collision ){
            if( player.pos[0] + player.hitbox[0] > gameWidth / 2 && mapOffset < levels[currentLevel][0][0].length * 32 - gameWidth ){
                // Move map not player
                mapOffset += movement;

                // Don't move too far
                if( mapOffset > levels[currentLevel][0][0].length * 32 - gameWidth ){
                    movement = movement + levels[currentLevel][0][0].length * 32 - gameWidth - mapOffset;
                    mapOffset = levels[currentLevel][0][0].length * 32 - gameWidth;
                }

                canvas2.style.left = parseInt(canvas2.style.left) - movement + 'px';
                canvas3.style.left = parseInt(canvas3.style.left) - movement + 'px';
                for(var i=0; i<blocked.length; i++) {
                    blocked[i].pos[0] -= movement;
                }
                for(var i=0; i<enemies.length; i++) {
                    enemies[i].pos[0] -= movement;
                }
                for(var i=0; i<animations.length; i++) {
                    animations[i].pos[0] -= movement;
                }
            } else{
                // Move player
                player.pos[0] += movement;
            }
        }
        collision = false;   
    }

    // Move down
    if( input.isDown('DOWN') ){
        if( direction === 'left' ){
            player.sprite.pos = [player.spriteOffset, player.spriteHeight*3];
        } else{
            player.sprite.pos = [player.spriteOffset, player.spriteHeight*2];
        }

        // Check collision
        collision = false;
        for(var i=0; i<blocked.length; i++) {
            if(boxCollides(blocked[i].pos, blocked[i].sprite.size, [ player.pos[0] + player.hitbox[0], player.pos[1] + Math.floor(playerSpeed * dt) ], [ player.hitbox[1], player.spriteHeight ])) {
                collision = true;
            }
        }
        for( var i=0; i<enemies.length; i++ ){
            if( boxCollides([enemies[i].pos[0] + enemies[i].hitbox[0], enemies[i].pos[1]], [enemies[i].hitbox[1], enemies[i].spriteHeight], [ player.pos[0] + player.hitbox[0], player.pos[1] + Math.floor(playerSpeed * dt) ], [ player.hitbox[1], player.spriteHeight ]) ){
                collision = true;
            }
        }

        if( !collision ){
            if( player.pos[1] > gameHeight / 2 && mapOffset2 < 512 - gameHeight ){
                // Move map not player
                mapOffset2 += movement;

                // Don't move too far
                if( mapOffset2 > 512 - gameHeight ){
                    movement = movement + 512 - gameHeight - mapOffset2;
                    mapOffset2 = 512 - gameHeight;                    
                }

                canvas2.style.top = parseInt(canvas2.style.top) - movement + 'px';
                canvas3.style.top = parseInt(canvas3.style.top) - movement + 'px';
                for(var i=0; i<blocked.length; i++) {
                    blocked[i].pos[1] -= movement;
                }
                for(var i=0; i<enemies.length; i++) {
                    enemies[i].pos[1] -= movement;
                }
                for(var i=0; i<animations.length; i++) {
                    animations[i].pos[1] -= movement;
                }
            } else{
                // Move player
                player.pos[1] += movement;
            }
        }
        collision = false;
    }

    // Move up
    if( input.isDown('UP') ){
        if( direction === 'left' ){
            player.sprite.pos = [player.spriteOffset, player.spriteHeight*3];
        } else{
            player.sprite.pos = [player.spriteOffset, player.spriteHeight*2];
        }

        // Check collision
        collision = false;
        for(var i=0; i<blocked.length; i++) {
            if(boxCollides(blocked[i].pos, blocked[i].sprite.size, [ player.pos[0] + player.hitbox[0], player.pos[1] - Math.floor(playerSpeed * dt) ], [ player.hitbox[1], player.spriteHeight ])) {
                collision = true;
            }
        }
        for( var i=0; i<enemies.length; i++ ){
            if( boxCollides([enemies[i].pos[0] + enemies[i].hitbox[0], enemies[i].pos[1]], [enemies[i].hitbox[1], enemies[i].spriteHeight], [ player.pos[0] + player.hitbox[0], player.pos[1] - Math.floor(playerSpeed * dt) ], [ player.hitbox[1], player.spriteHeight ]) ){
                collision = true;
            }
        }

        if( !collision ){
            if( player.pos[1] < gameHeight / 2 && mapOffset2 > 0 ){
                // Move map not player
                mapOffset2 -= movement;
                
                // Don't move too far
                if( mapOffset2 < 0 ){
                    movement = movement + mapOffset2;
                    mapOffset2 = 0;
                }

                canvas2.style.top = parseInt(canvas2.style.top) + movement + 'px';
                canvas3.style.top = parseInt(canvas3.style.top) + movement + 'px';
                for(var i=0; i<blocked.length; i++) {
                    blocked[i].pos[1] += movement;
                }
                for(var i=0; i<enemies.length; i++) {
                    enemies[i].pos[1] += movement;
                }
                for(var i=0; i<animations.length; i++) {
                    animations[i].pos[1] += movement;
                }
            } else{
                // Move player
                player.pos[1] -= movement;
            }
        }
        collision = false; 
    }

    // Default animation
    if( !input.isDown('RIGHT') && !input.isDown('LEFT') && !input.isDown('UP') && !input.isDown('DOWN') && !input.isDown('SPACE') ){
        if( !player.sprite.inProgress ){
            // Reset sprite
            player.sprite.frames = [0];
            if( direction === 'left' ){
                player.sprite.pos = [player.spriteOffset, player.spriteHeight];
            } else{
                player.sprite.pos = [player.spriteOffset, 0];
            }
        }
    }

    // Attack animation
    if( input.isDown('SPACE')
        && !input.isDown('RIGHT')
        && !input.isDown('LEFT')
        && !input.isDown('UP')
        && !input.isDown('DOWN') ){

        player.sprite.speed = player.fightAnimationSpeed;
        player.sprite.inProgress = true;
        if( direction === 'left' ){
            player.sprite.pos = [player.spriteOffset, player.spriteHeight*5];
        } else{
            player.sprite.pos = [player.spriteOffset, player.spriteHeight*4];
        }
        player.sprite.frames = [0, 1, 2, 1];
    }
}


//////////////////////////////////////////////
// Check if something got hit by player     //
//////////////////////////////////////////////
function playerHitting(){
    if( player.sprite.inProgress ){
        // Successful hit
        var idx = Math.floor(player.sprite._index);
        var frame = player.sprite.frames[idx % player.sprite.frames.length];

        if( frame === player.sprite.frames.length - 2 && hitEnemy ){
            hitEnemy = false;
            for( var i=0; i<enemies.length; i++ ){
                // Enemy on left side and in range
                if( direction === 'left'
                    && enemies[i].pos[0] + enemies[i].hitbox[1] <= player.pos[0]
                    && enemies[i].pos[0] > player.pos[0] - enemies[i].hitbox[1] - 10
                    && enemies[i].pos[1] < player.pos[1] + player.spriteHeight / 2
                    && enemies[i].pos[1] > player.pos[1] - player.spriteHeight / 2 ){
                    dealDamageToEnemy( enemies[i], i );

                // Enemy on right side and in range
                } else if( direction === 'right'
                    && enemies[i].pos[0] >= player.pos[0] + player.hitbox[1]
                    && enemies[i].pos[0] < player.pos[0] + player.hitbox[1] + 10
                    && enemies[i].pos[1] < player.pos[1] + player.spriteHeight / 2
                    && enemies[i].pos[1] > player.pos[1] - player.spriteHeight / 2 ){
                    dealDamageToEnemy( enemies[i], i );
                }
            }
            
        } else if( frame === player.sprite.frames.length - 3 ){
            hitEnemy = true;
        }
    }
}


//////////////////////////////////////////////
// Update the entities                      //
//////////////////////////////////////////////
function updateEntities(dt) {
    // Update the player sprite animation
    player.sprite.update(dt);

    // Update all the bullets
    /*for(var i=0; i<bullets.length; i++) {
        var bullet = bullets[i];

        switch(bullet.dir) {
        case 'up': bullet.pos[1] -= bulletSpeed * dt; break;
        case 'down': bullet.pos[1] += bulletSpeed * dt; break;
        default:
            bullet.pos[0] += bulletSpeed * dt;
        }

        // Remove the bullet if it goes offscreen
        if(bullet.pos[1] < 0 || bullet.pos[1] > canvas.height ||
           bullet.pos[0] > canvas.width) {
            bullets.splice(i, 1);
            i--;
        }
    }*/

    // Update all the enemies
    for( var i=0; i<enemies.length; i++ ){
        enemies[i].sprite.update(dt);

        // Move if inside range
        if( enemies[i].pos[0] - player.pos[0] < enemies[i].aggroRange || enemies[i].aggroRange === 0 ){
            enemies[i].aggroRange = 0;
            moveEnemy( enemies[i].pos, i, dt );
        }
    }

    // Update all the animations
    for( var i=0; i<animations.length; i++ ){
        animations[i].sprite.update(dt);
    }
}


//////////////////////////////////////////////
// Check collisions                         //
//////////////////////////////////////////////
function checkCollisions(){
    // Check if player is at map border
    checkObjectBounds(player);

    // Check if enemies are at map border
    /*for( var i=0; i<enemies.length; i++ ){
        if(enemies[i].pos[1] < 0) {
            enemies[i].pos[1] = 0;
        }
        else if(enemies[i].pos[1] > canvas.height - enemies[i].sprite.size[1]) {
            enemies[i].pos[1] = canvas.height - enemies[i].sprite.size[1];
        }
    }*/
    
    // Run collision detection for all enemies and bullets
    /*for(var i=0; i<enemies.length; i++) {
        var pos = enemies[i].pos;
        var size = enemies[i].sprite.size;

        for(var j=0; j<bullets.length; j++) {
            var pos2 = bullets[j].pos;
            var size2 = bullets[j].sprite.size;

            if(boxCollides(pos, size, pos2, size2)) {
                // Remove the enemy
                enemies.splice(i, 1);
                i--;

                // Add an explosion
                explosions.push({
                    pos: pos,
                    sprite: new Sprite(spritePath,
                                       [0, 117],
                                       [39, 39],
                                       16,
                                       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                       null,
                                       true)
                });

                // Remove the bullet and stop this iteration
                bullets.splice(j, 1);
                break;
            }
        }

        if(boxCollides(pos, size, player.pos, player.sprite.size)) {
            console.log('BÄM');
            //gameOver();
        }
    }*/
}


//////////////////////////////////////////////
// Check if object is at map border         //
//////////////////////////////////////////////
function checkObjectBounds(object){
    // Check bounds
    if(object.pos[0] + object.hitbox[0] < 0) {
        object.pos[0] = 0 - object.hitbox[0];
    }
    else if(object.pos[0] + object.hitbox[0] > gameWidth - object.hitbox[1]) {
        object.pos[0] = gameWidth - object.hitbox[1] - object.hitbox[0];
    }

    if(object.pos[1] < 0) {
        object.pos[1] = 0;
    }
    else if(object.pos[1] > gameHeight - object.sprite.size[1]) {
        object.pos[1] = gameHeight - object.sprite.size[1];
    }
}


//////////////////////////////////////////////
// Draw everything                          //
//////////////////////////////////////////////
function render(){
    // Clear canvas hack
    canvas.width = canvas.width;
    canvas4.width = canvas4.width;

    // Render entities
    renderEntities(enemies);
    renderEntity(player);
    renderEntities(animations);
    //renderEntities(bullets);
    //renderEntities(blocked);

    // Render enemy health bars
    for( var i=0; i<enemies.length; i++ ){
        if( enemies[i].currentHealth < enemies[i].health ){
            var healthWidth = (100 / enemies[i].health) * enemies[i].currentHealth,
                damageWidth = 0;

            // Health bar
            healthWidth = Math.floor( (enemies[i].hitbox[1] / 100) * healthWidth );
            drawLine( 2, '#090', enemies[i].pos[0] + enemies[i].hitbox[0], enemies[i].pos[1] - 5, enemies[i].pos[0] + enemies[i].hitbox[0] + healthWidth, enemies[i].pos[1] - 5 );

            // Damage bar
            damageWidth = enemies[i].hitbox[1] - healthWidth;
            drawLine( 2, '#900', enemies[i].pos[0] + enemies[i].hitbox[0] + healthWidth, enemies[i].pos[1] - 5, enemies[i].pos[0] + enemies[i].hitbox[0] + healthWidth + damageWidth, enemies[i].pos[1] - 5 );
        }
    }

    // Rain
    if( raining ){
        rain.width = rain.width;
        ctx5.save();
        ctx5.fillStyle = 'rgba(0,0,0,0)';
        ctx5.fillRect(0, 0, rain.width, rain.height);
        
        var particuleslocales = particules;
        var goutteslocales = gouttes;
        var tau = Math.PI * 2;

        for (var i = 0, particulesactives; particulesactives = particuleslocales[i]; i++) {
                
            ctx5.globalAlpha = particulesactives.alpha;
            ctx5.fillStyle = particulesactives.couleur;
            ctx5.fillRect(particulesactives.X, particulesactives.Y, particulesactives.vitesseY/4, particulesactives.vitesseY);
        }

        ctx5.restore();
    }
}


//////////////////////////////////////////////
// Render entities                          //
//////////////////////////////////////////////
function renderEntities(list) {
    for(var i=0; i<list.length; i++) {
        renderEntity(list[i]);
    }    
}

function renderEntity(entity) {
    ctx.save();
    ctx.translate(entity.pos[0], entity.pos[1]);
    entity.sprite.render(ctx);
    ctx.restore();
}


//////////////////////////////////////////////
// Check and generate health                //
//////////////////////////////////////////////
function checkHealth(dt){
    if( player.currentHealth < player.health && !playerInFight ){
        var addedHealthPoints = player.healthGeneration * dt;
        player.currentHealth += addedHealthPoints;
        innerHp.style.width = (Math.floor(player.currentHealth) / player.health) * 100 + '%';
    }
}


//////////////////////////////////////////////
// Register event handlers                  //
//////////////////////////////////////////////
function eventHandlers(){
    // Main menu
    document.getElementById('play-button').addEventListener('click', function(){
        document.getElementById('inner-wrapper').className = 'started';
        document.getElementById('fog').className = 'started';
        document.getElementById('inner-wrapper').classList.add('play');
        document.getElementById('ridane').style.display = 'none';
        document.getElementById('ridane-glow').style.display = 'none';
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('game-interface').className = 'started';
        gameStarted = true;

        // Sound
        if( sound ){
            $.mbAudio.play('effectSprite', 'start');
            $.mbAudio.play('effectSprite2', 'thunderstorm');
            $.mbAudio.play('backgroundSprite', 'level1');
        }
    });

    // Pause menu
    document.getElementById('menu').addEventListener('click', function(){
        pause = true;
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('pause-menu').style.display = 'block';
    });

    // Resume button
    document.getElementById('resume-button').addEventListener('click', function(){
        document.getElementById('pause-menu').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        pause = false;
    });

    // Help button main
    document.getElementById('help-button-main').addEventListener('click', function(){
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('help-menu-main').style.display = 'block';
    });

    // Back button help main
    document.getElementById('back-button-help').addEventListener('click', function(){
        document.getElementById('help-menu-main').style.display = 'none';
        document.getElementById('main-menu').style.display = 'block';
    });

    // Help button game
    document.querySelectorAll('#pause-menu .help-button')[0].addEventListener('click', function(){
        helpMenu = 'pause';
        document.getElementById('pause-menu').style.display = 'none';
        document.getElementById('help-menu').style.display = 'block';
    });
    document.querySelectorAll('#game-over-menu .help-button')[0].addEventListener('click', function(){
        helpMenu = 'over';
        document.getElementById('game-over-menu').style.display = 'none';
        document.getElementById('help-menu').style.display = 'block';
    });
    document.querySelectorAll('#level-complete-menu .help-button')[0].addEventListener('click', function(){
        helpMenu = 'complete';
        document.getElementById('level-complete-menu').style.display = 'none';
        document.getElementById('help-menu').style.display = 'block';
    });

    // Back buttons help game
    document.querySelectorAll('.back-button')[0].addEventListener('click', function(){
        document.getElementById('help-menu').style.display = 'none';
        if( helpMenu === 'pause' ){
            document.getElementById('pause-menu').style.display = 'block';
        } else if( helpMenu === 'over' ){
            document.getElementById('game-over-menu').style.display = 'block';
        } else if( helpMenu === 'complete' ){
            document.getElementById('level-complete-menu').style.display = 'block';
        }
    });

    // Play again button
    document.getElementById('play-again-button').addEventListener('click', function(){
        reset();
    });

    // Main menu buttons
    var mainMenuButtons = document.querySelectorAll('.main-menu-button');
    for( var i=0; i<mainMenuButtons.length; i++ ){
        mainMenuButtons[i].addEventListener('click', function(){
            reset();
        });
    }

    // Activate sound button
    soundElement.addEventListener('click', function(){
        if( !sound && !soundStarted ){
            $(document).trigger('initAudio');
            sound = true;
            soundElement.className = 'enabled';
        } else if( !sound && soundStarted ){
            $.mbAudio.unMuteAllSounds();
            sound = true;
            soundElement.className = 'enabled';
        } else if( sound ){
            $.mbAudio.muteAllSounds();
            sound = false;
            soundElement.className = 'muted';
        }
    });
    $(document).on("initAudio", function (){
        $.mbAudio.pause('effectSprite', audioIsReady);
    });
}


//////////////////////////////////////////////
// Game over actions                        //
//////////////////////////////////////////////
function gameOver(){
    pause = true;
    innerHp.style.width = 0;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('game-over-menu').style.display = 'block';
}


//////////////////////////////////////////////
// Reset game to original state             //
//////////////////////////////////////////////
function reset(){
    window.location.reload();

    //document.getElementById('game-over-menu').style.display = 'none';
    //document.getElementById('overlay').style.display = 'none';

    // Reset variables
    /*gameTime = 0;
    enemies = [];
    bullets = [];
    blocked = [];
    collision = false;
    mapOffset = 0;
    player.pos = [25, 215];*/
}


//////////////////////////////////////
// Initialization                   //
//////////////////////////////////////
function init(){
    // Blocked fields
    for( var i=0; i<blockedPositions.length; i++ ){
        blocked.push({
            pos: blockedPositions[i],
            sprite: new Sprite(spritePath, [0, 0], [32, 1], 1, [10])
        });
    }

    tilesetImage = resources.get('img/tileset.png');
    lastTime = Date.now();
    eventHandlers();

    // Draw layers
    drawImage();
    drawImage2();

    // Main game loop
    main();

    requestTimeout(function(){
        document.getElementById('loading').className = 'done';
        requestTimeout(function(){
            document.getElementById('loading').style.display = 'none';
        }, 1000);
    }, 1000);
}

// Initialize if all ressources are loaded
resources.load([
    spritePath,
    animationPath,
    'img/tileset.png'
]);
resources.onReady(init);


//////////////////////////////////////////////
// Collision                                //
//////////////////////////////////////////////
function collides( x, y, r, b, x2, y2, r2, b2 ){
    return !(r <= x2 || x > r2 ||
             b <= y2 || y > b2);
}

function boxCollides( pos, size, pos2, size2 ){
    return collides(pos[0], pos[1],
                    pos[0] + size[0], pos[1] + size[1],
                    pos2[0], pos2[1],
                    pos2[0] + size2[0], pos2[1] + size2[1]);
}


//////////////////////////////////////////////
// Resize the game                          //
//////////////////////////////////////////////
var resizeTimer;
function setCanvasDimensions(){
    gameWidth = document.getElementById('inner-wrapper').offsetWidth;
    gameHeight = document.getElementById('inner-wrapper').offsetHeight;
}
window.onresize = function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setCanvasDimensions, 250);
}
window.addEventListener('orientationchange', setCanvasDimensions);


//////////////////////////////////////////////
// Create the canvas elements               //
//////////////////////////////////////////////
// Ground layer canvas
var canvas2 = document.createElement("canvas");
var ctx2 = canvas2.getContext("2d");
document.getElementById('inner-wrapper').appendChild(canvas2);

// Object canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
document.getElementById('inner-wrapper').appendChild(canvas);

// Top layer canvas
var canvas3 = document.createElement("canvas");
var ctx3 = canvas3.getContext("2d");
document.getElementById('inner-wrapper').appendChild(canvas3);

// UI elements canvas
var canvas4 = document.createElement("canvas");
var ctx4 = canvas4.getContext("2d");
document.getElementById('inner-wrapper').appendChild(canvas4);

// Rain canvas element
var ctx5 = rain.getContext("2d");

// Create and style canvas
var canvasElements = document.getElementsByTagName('canvas');
for( var i=0; i < canvasElements.length; i++ ){
    if( canvasElements[i].getAttribute('id') !== 'rain' ){
        canvasElements[i].width = levels[currentLevel][0][0].length * 32;
        canvasElements[i].height = levels[currentLevel][0].length * 32;
        canvasElements[i].style.left = 0;
        canvasElements[i].style.top = 0;
    }
}


//////////////////////////////////////////////
// Random number                            //
//////////////////////////////////////////////
function getRandom( min, max ){
    return Math.floor(Math.random()*(max-min+1)+min);
}


//////////////////////////////////////////////
// Draw a canvas line                       //
//////////////////////////////////////////////
function drawLine( lineWidth, lineColor, x1, y1, x2, y2 ){
    ctx4.fillStyle = lineColor;
    ctx4.strokeStyle = lineColor;
    ctx4.beginPath();
    ctx4.moveTo(x1, y1);
    ctx4.lineTo(x2, y2);
    ctx4.lineWidth = lineWidth;
    ctx4.stroke();
    ctx4.closePath();
}


//////////////////////////////////////////////
// Check for mobile device                  //
//////////////////////////////////////////////
function mobilecheck(){
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}


//////////////////////////////////////////////
// A cross-browser requestAnimationFrame    //
//////////////////////////////////////////////
var requestAnimFrame = (function(){
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance //
// @param {function} fn The callback function                                                               //
// @param {int} delay The delay in milliseconds                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.requestTimeout = function(fn, delay) {
    if( !window.requestAnimationFrame       && 
        !window.webkitRequestAnimationFrame && 
        !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
        !window.oRequestAnimationFrame      && 
        !window.msRequestAnimationFrame)
            return window.setTimeout(fn, delay);
            
    var start = new Date().getTime(),
        handle = new Object();
        
    function loop(){
        var current = new Date().getTime(),
            delta = current - start;
            
        delta >= delay ? fn.call() : handle.value = requestAnimFrame(loop);
    };
    
    handle.value = requestAnimFrame(loop);
    return handle;
};
 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Behaves the same as clearTimeout except uses cancelRequestAnimationFrame() where possible for better performance //
// @param {int|object} fn The callback function                                                                     //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.clearRequestTimeout = function(handle) {
    window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
    window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) :
    window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
    window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
    window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) :
    window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) :
    clearTimeout(handle);
};