FROM node:carbon

WORKDIR /data

ADD . /data

EXPOSE 8000

# Run it
CMD ["node", "index.js"]
