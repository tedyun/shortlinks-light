# Installation

First install Node.js and NPM following the instruction [here](https://github.com/nodesource/distributions/blob/master/README.md).
For example, you can run the following commands in Ubuntu/Debian for installing Node.js v12.x:
```
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

Install nodemon:
```
$ sudo npm install -g nodemon
```

Copy template DB and add links to the text DB using a text editor:
```
$ cp server/data/textdb.js.template server/data/textdb.js
$ nano server/data/textdb.js
```

Install packages and run server:
```
$ cd server
$ npm install
$ npm start
```

You can test if the server works by accessing http://localhost:7000/api/item/gl (it should redirect to google.com) locally.

The final step is setting up a web server, for example Nginx, to redirect payload. If you don't have Nginx you can install it with `sudo apt install nginx`.

Open `/etc/nginx/sites-enabled/default` with a text editor and add the following lines
in the default server configuration (replace `yourdomain.com` with your own domain):
```
location ~* "^/[0-9a-z@]*$"  {
    rewrite ^/(.*)$ http://yourdomain.com:7000/api/item/$1 redirect;
}
```

Now, try http://yourdomain.com/gl and see if that redirects you to google.com.

# Notes

You can read more about the history of Go Links [here](https://medium.com/@golinks/the-full-history-of-go-links-and-the-golink-system-cbc6d2c8bb3). This code in this repo is partially based on https://codeburst.io/creating-custom-url-shortener-with-nodejs-de10bbbb89c7
