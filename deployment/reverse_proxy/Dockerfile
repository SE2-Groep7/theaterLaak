FROM nginx:1.22.1-alpine AS server
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./mohieddin.nl.pem /etc/nginx/ssl/mohieddin.nl.pem
COPY ./mohieddin.nl.key /etc/nginx/ssl/mohieddin.nl.key
COPY ./cloudflare.pem /etc/nginx/certs/cloudflare.pem
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
# small edit
