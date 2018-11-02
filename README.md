# Firebase-project
------


+ 1) wget -qO- https://deb.nodesource.com/setup_10.x | sudo -E bash -

+ 2) apt-get install -y nodejs

+ 3) apt-get install -y build-essential

+ 4) npm install -g react-native-cli

+ 5) instalar android studio si no es te android sdk, tot i tenir el sdk es recomenat instalar el IDE, assegurar que es te instalat el SDK!

+ 6) Configurar ANDROID_HOME (LINUX), leafpad $HOME/.bash_profile i adins ficar lo següent, sino a $HOME/.bashrc:


export ANDROID_HOME=$HOME/Android/Sdk

export PATH=$PATH:$ANDROID_HOME/tools

export PATH=$PATH:$ANDROID_HOME/tools/bin

export PATH=$PATH:$ANDROID_HOME/platform-tools

export PATH=$PATH:$ANDROID_HOME/emulator


+ 7) Type source $HOME/.bash_profile to load the config into your current shell. Verify that ANDROID_HOME has been added to your path by running echo $PATH.

+ 8) cd al directory on s'ha clonat el projecte (ficar-se adins)

+ 9) chmod la carpeta del projecte a 777, cd a la carpeta del projecte, seguit fer npm install (instala moduls per defecte)

+ 10) (PUNT CRITIC) identificar-se com a root (su+password), npm install -g firebase-tools + npm install --save firebase@4-9.1

+ 11)  seguir aixo <https://facebook.github.io/react-native/docs/running-on-device>

+ 12) acceptar llicencies SDK, jo he tingut que instalar el sdk 27. ser root i fer: yes | sdkmanager --licenses

+ 13) Dins la mateixa carpeta del projecte react-native run-android i veure si executa al mobil, altrament mirar stack-overflow ¯\_(ツ)_/¯


Més info a [GETTING STARTED WITH REACT!](https://facebook.github.io/react-native/docs/getting-started.html)


Moduls instalars:


delete your node_modules directory (rm -rf node_modules/)

npm i -S react-native@0.57.1

npm add @babel/runtime

npm i schedule@0.4.0 --save-dev

npm i

npm install -g firebase-tools

npm install  firebase@4.9.1 --save

npm install react-navigation

Delete la app i tornar a fer el react-native run-android




