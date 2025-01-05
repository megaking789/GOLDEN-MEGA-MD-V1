FROM quay.https://github.com/megaking789/GOLDEN-MEGA-MD-V1
RUN git clone https://https://github.com/megaking789/GOLDEN-MEGA-MD-V1 /root/GOLDEN-MEGA-MD
# RUN rm -rf /root/GOLDEN-MEGA-MD/.git
WORKDIR /root/GOLDEN-MEGA-MD
RUN npm install || yarn install
EXPOSE 8000
CMD ["npm","start" ]
