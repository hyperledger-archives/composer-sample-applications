#!/bin/bash

# Usage:
#
# ./prereqs-ubuntu.sh
#
# User must then logout and login
#
# ./prereqs-ubuntu.sh docker
#
# Pre-requisites will now be installed


if [[ $1 == "docker" ]]; then
	# You will need to have logged out and logged back in order after running the first script for this script to work!

	# Install python package management system to easily install docker-compose
	sudo apt-get -y install python-pip

	# Use pip to install Docker Compose
	sudo pip install docker-compose

	# Login to npm Whitewater registry
	echo "Logging into: https://npm-registry.whitewater.ibm.com"
	npm login --registry=https://npm-registry.whitewater.ibm.com --scope=@ibm
else
# Update package lists
sudo apt-get update

# Install Git
sudo apt-get -y install git

# Install nvm dependencies
sudo apt-get -y install build-essential libssl-dev

# Execute nvm installation script
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash

# Update bash profile
cat <<EOF >> ~/.profile
export NVM_DIR=~/.nvm
[ -s "\$NVM_DIR/nvm.sh" ] && . "\$NVM_DIR/nvm.sh"
EOF

# Reload bash profile
source ~/.profile

# Install node and npm
nvm install 4.6.2

# Configure nvm to use version 4.6.2
nvm use 4.6.2

# Install the latest version of npm
npm install npm@latest -g

# Ensure that CA certificates are installed
sudo apt-get -y install apt-transport-https ca-certificates

# Add new GPG key and add it to adv keychain
sudo apt-key adv \
               --keyserver hkp://ha.pool.sks-keyservers.net:80 \
               --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

# Update where APT will search for Docker Packages
echo "deb https://apt.dockerproject.org/repo ubuntu-trusty main" | sudo tee /etc/apt/sources.list.d/docker.list

# Update package lists
sudo apt-get update

# Verifies APT is pulling from the correct Repository
sudo apt-cache policy docker-engine

# Install kernel packages which allows us to use aufs storage driver
sudo apt-get -y install linux-image-extra-$(uname -r) linux-image-extra-virtual

# Install docker-engine
sudo apt-get -y install docker-engine=1.12.3-0~trusty

# Modify user account
sudo usermod -aG docker $(whoami)

# You will need to logout in order for these changes to take effect!
echo "Please logout then login before running: ./prereqs-ubuntu.sh docker"

fi
