import randomstring from 'randomstring';

export function generateNewChat() {
  const id = Math.floor(Math.random() * 100);
  const generatedUserName = `User_${id}`;
  const message = randomstring.generate();
  const chatMessage = {
    userName: generatedUserName,
    message: message
  };
  const p = new Promise(function(resolve, reject) {
   setTimeout(() => resolve(chatMessage), 2000);
  });
  return p;
}


export function generateNewMessage(userName) {
  const message = randomstring.generate();
  const chatMessage = {
    userName: userName,
    message: message
  };
  const p = new Promise(function(resolve, reject) {
   setTimeout(() => resolve(chatMessage), 2000);
  });
  return p;
}
