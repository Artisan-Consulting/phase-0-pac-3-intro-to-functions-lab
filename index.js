function shout(getMessage) {
   return getMessage.toUpperCase();
}

function whisper(getMessage) {
   return getMessage.toLowerCase();
}

function logShout(getMessage) {
   console.log(getMessage.toUpperCase());
}

function logWhisper(getMessage) {
   console.log(getMessage.toLowerCase());
}

function sayHiToHeadphonedRoommate(getMessage) {
   const message1 = "hello";
   const message2 = "HELLO";
   const message3 = "Let's have dinner together!";

   const response1 = "I can't hear you!";
   const response2 = "YES INDEED!";
   const response3 = "I would love to!";

   switch (getMessage) {
      case message1:
         console.log(response1);
         return response1;
         break;
      case message2:
         console.log(response2);
         return response2;
         break;
      case message3:
         console.log(response3);
         return response3;
         break;
   }

}