FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY lessons-data.js /usr/share/nginx/html/
COPY challenges-data.js /usr/share/nginx/html/
COPY bugbounty-challenges.js /usr/share/nginx/html/
COPY project-data.js /usr/share/nginx/html/
COPY network-data.js /usr/share/nginx/html/
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
