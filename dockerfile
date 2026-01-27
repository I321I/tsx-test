FROM node:25.2.1-trixie as base
# RUN mkdir -p /mnt/project
# VOLUME ./ /mnt/project
# WORKDIR /mnt/project

CMD ["npm", "run", "dev"]

FROM base as myDevContainer
COPY ./mackup /mnt/mackup
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" &&\
    chsh -s $(which zsh) &&\
    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k" &&\
    apt-get update && \
    apt-get install python3-pip &&\
    pip install --upgrade mackup --break-system-packages &&\
    mackup restore --config-file /mnt/mackup/.mackup.cfg
CMD ["zsh"]