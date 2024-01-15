#!/bin/bash

# always run on new instance
cp ./.devcontainer/.bashrc ~/.bashrc
# UFlash
pip3 install uflash
# shellcheck disable=SC1090
source ~/.bashrc
git config pull.rebase false
