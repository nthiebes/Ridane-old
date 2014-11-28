<?php

curl -H 'Content-Type: application/json' -d '{"data":"{\"message\":\"hello world\"}","name":"my_event","channel":"test_channel"}' \
"http://api.pusherapp.com/apps/84889/events?"\
"body_md5=8a3501faef6636ca9a5ebbe6f31b5409&"\
"auth_version=1.0&"\
"auth_key=9f78001ed952b4675e2b&"\
"auth_timestamp=1407691560&"\
"auth_signature=53a3c06083dff58baba48a74cf466687ac2f36c0fd6435a9c70f2cded1b270ad&"

?>