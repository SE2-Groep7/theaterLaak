FROM nginx:1.22.1-alpine AS server
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./mohieddin.nl.pem /etc/nginx/ssl/mohieddin.nl.pem
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]