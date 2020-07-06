# Demo NGINX NJS

Demo of NGINX webserver and NJS JavaScript.

## Setup

### Ubuntu

Install the necessary module for NGINX JavaScript and any other modules you want, such as:

```sh
sudo apt-get -y install libnode-dev
sudo apt-get -y install nginx-module-njs
```

Copy the demo code file [demo_nginx_njs.js](demo_nginx_njs.js) to your NGINX configuration directory, such as `/etc/nginx`.

Edit your NGINX configuration file, such as `/etc/nginx/nginx.conf`, and insert the lines from the file [nginx.conf](nginx.conf).

Edit your NGINX server configuration file, such as `/etc/nginx/conf.d/server.conf`, and insert the lines from the file [server.conf](server.conf).

Reload NGINX, such as:

```sh
sudo service nginx reload
```

Browse to your new script, such as: http://localhost:8080/demo-hello.html
