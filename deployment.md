

````
cd ~/meteorApps/wanchain-hackathon-toolkit
git pull
meteor build ~/meteorBuilds/hackathonStarter/buildThree --architecture os.linux.x86_64
tar -xvzf ~/meteorBuilds/hackathonStarter/buildThree/wanchain-hackathon-toolkit.tar.gz
cd ~/meteorBuilds/hackathonStarter/buildThree/bundle/programs/server
npm install
sudo service nginx restart
sudo service icotool restart
````

events {
    worker_connections  1024;
    # worker_processes and worker_connections allows you to calculate maxclients $
    # max_clients = worker_processes * worker_connections
}

http {

upstream meteor {
    server 127.0.0.1:9000;
}

server {
    listen      80;
    server_name 52.14.147.127;
    access_log  /var/log/nginx/meteor.access.log;
    error_log   /var/log/nginx/meteor.error.log;
    proxy_buffers 16 64k;
    proxy_buffer_size 128k;

location / {
        proxy_pass  http://meteor;
        proxy_next_upstream error timeout invalid_header http_500 http_502 http_5$
        proxy_redirect off;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header    Host            $host;
        proxy_set_header    X-Real-IP       $remote_addr;
        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header    X-Forwarded-Proto https;


}
location /production {
        proxy_pass  http://127.0.0.1:5000;
        proxy_next_upstream error timeout invalid_header http_500 http_502 http_5$
        proxy_redirect off;

        proxy_set_header    Host            $host;
        proxy_set_header    X-Real-IP       $remote_addr;
        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header    X-Forwarded-Proto https;


}
location /ico-files {
    alias /home/harry/meteorBuilds/icoTool/buildThree/bundle/programs/server/.upl$
    autoindex on;
    index index.html;
  }
location /verified-icos {
    alias /home/harry/meteorBuilds/icoTool/buildThree/bundle/programs/server/.upl$
    autoindex on;
    index index.html;
  }
}
}