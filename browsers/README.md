Google Chrome is required but the GitHub repository does not include the .deb installer.

Install it manually on Ubuntu/Debian:

  wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
  sudo dpkg -i google-chrome-stable_current_amd64.deb
  sudo apt-get install -f -y

After installation, the scripts will automatically use /usr/bin/google-chrome-stable.
