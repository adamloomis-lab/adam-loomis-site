/*
 * Field Notes — Adam's writing.
 * Blog-format posts (we just don't call it a blog).
 * Add a new entry to POSTS to publish; register its route in scripts/prerender.mjs
 * and src/components/RouteMeta.tsx so it prerenders with its own head + schema.
 */

export type Block =
  | { kind: "p"; text: string }
  | { kind: "p-first"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "lead"; text: string };

export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string; // display date
  isoDate: string; // machine date for schema
  readingTime: string;
  excerpt: string;
  blocks: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "confront-the-fear-wall",
    title: "Confront the Fear Wall",
    subtitle:
      "There is a wall standing between you and the life your heart desires. This is how you tear it down.",
    category: "Encouragement",
    date: "June 11, 2026",
    isoDate: "2026-06-11",
    readingTime: "7 min read",
    excerpt:
      "At some level, misery is a choice. Between you and the life your heart desires there is a wall. Here is how you run at it in faith and watch it come down.",
    blocks: [
      { kind: "h2", text: "Misery Is a Choice" },
      {
        kind: "p-first",
        text:
          "I want to start with something that might sting a little, but I say it because I care about you too much to be soft with it.",
      },
      { kind: "p", text: "At some level, misery is a choice." },
      {
        kind: "p",
        text:
          "If you wake up and dread the day, if you look at today and this week and just want to be somewhere else, if your feet hit the floor in the morning and there is no excitement left in you, hear me. You do not have to live that way. Life is far too short for that.",
      },
      {
        kind: "p",
        text:
          "We put ourselves in situations we do not actually have to stay in. Not because we cannot leave them, but because staying the same feels easier than changing. So we sit in the misery like it is some warm hot spring we stumbled onto. We make ourselves comfortable in a place that was never meant to hold us.",
      },
      { kind: "p", text: "Stop soaking in it. Confront it." },

      { kind: "h2", text: "Your Discontent Is an Invitation" },
      {
        kind: "p",
        text:
          "Here is the part most people miss. If you are not happy, that is not the end of the story. It is an indicator. It is a signal that there is an opportunity to move from the place you are in to the place God has called you to be.",
      },
      {
        kind: "p",
        text:
          "And that place He is calling you to is not really a location. It is a person. All of us were called for a purpose, and the purpose is Jesus. We were made to walk in relationship with Him. From that place of relationship, all things become possible to the one who believes.",
      },
      {
        kind: "p",
        text:
          "Paul said all things are possible. He also reminded us that not everything is beneficial. So we walk in our freedom inside the boundaries of the grace of God. But do not let anyone convince you the walls of your current situation are permanent. They are not.",
      },
      {
        kind: "p",
        text:
          "If you are miserable in your life, change it. If you are miserable in your work, change it. Do not ignore the misery. Do not complain about the misery. Confront it. Spend as much energy looking for the resolution as you have been spending inside the pain.",
      },

      { kind: "h2", text: "The Fear Wall" },
      {
        kind: "p",
        text:
          "Between you and the life your heart desires, there is a wall.",
      },
      { kind: "p", text: "I call it the fear wall." },
      {
        kind: "p",
        text:
          "It is the voice that says you are not qualified. You do not have enough money. You do not have the connections. You do not have the education. You will never amount to anything. And if you sit with it for a second, you can probably hear the exact people who said those words to you.",
      },
      {
        kind: "p",
        text:
          "So let me ask you a question. Who are they? Who is the “they” that said that over your life? And who qualified them to speak to the destiny God placed inside you?",
      },
      {
        kind: "p",
        text:
          "Because greater is He that is in you than he that is in the world. The calling and the anointing on your life is greater than the fear. It is greater than the intimidation the enemy uses to pressure you down. Confront it. Do not let it run your life.",
      },
      {
        kind: "p",
        text:
          "And if you have hit that wall already, if you have looked at what God called you to do and run straight into “I am not enough, I cannot do this, I do not even know how,” then good. You are exactly where you need to be. The Bible says if any of us lacks wisdom, let him ask of God. If you do not know what to do, ask. Seek. Knock. And the door will open.",
      },

      { kind: "h2", text: "Is There Not a Cause?" },
      { kind: "p", text: "Think about David." },
      {
        kind: "p",
        text:
          "He was anointed king over Israel while he was still in a field watching his father's sheep. Then the Philistine army surrounded the nation. Everyone went to fight, and the whole army of Israel froze behind their own fear wall. That wall had a name. Goliath. A giant who stood there day after day, taunting them, mocking them, mocking God.",
      },
      {
        kind: "p",
        text:
          "And they hid. Because fear makes you hide. Fear keeps you from doing anything at all.",
      },
      {
        kind: "p",
        text:
          "Faith is the opposite. Faith makes you move. Faith moves your feet. Faith makes you run. Faith without works is dead, so faith always does something.",
      },
      {
        kind: "p",
        text:
          "David showed up to deliver food to his brothers, heard the giant mocking the armies of the living God, and said four words that still preach today. Is there not a cause?",
      },
      {
        kind: "p",
        text:
          "His own brothers turned on him. Go home. Who do you think you are? You are too little. You are not qualified. You do not have enough. People will tell you the same thing. Most of the time it is coming straight out of their own inadequacy, out of the things they never had the courage to move on themselves.",
      },
      {
        kind: "p",
        text:
          "David did not listen. He did not need their support. He remembered the lion. He remembered the bear. He reminded himself of what God had already done in his past, and he decided this giant would be no different.",
      },

      { kind: "h2", text: "Run Toward the Wall" },
      {
        kind: "p",
        text: "Then David did the thing almost nobody does.",
      },
      { kind: "p", text: "He ran toward the wall." },
      {
        kind: "p",
        text:
          "He took five smooth stones and a slingshot, and he ran at the very thing everyone else was hiding from. He looked at that giant and said, you come at me with a spear and a sword, but I come at you in the name of the Lord. One stone. One moment. Down went Goliath. Down went the fear wall.",
      },
      {
        kind: "p",
        text:
          "That is the thing standing between you and what your heart desires. Between you and the life you always wanted. Between you and your health. Between you and your family being restored. Between you and your financial deliverance. And here is the honest truth. Whatever you are doing right now to avoid it is not working either. So you might as well run at it in faith.",
      },
      {
        kind: "p",
        text:
          "Have an idea? Pursue it. Try the weird thing. Throw it all on the table. Go all in. Do not let the limits of where you are right now keep you from where God is calling you to be.",
      },

      { kind: "h2", text: "God Meets You There" },
      {
        kind: "p",
        text: "Here is what I most want you to hold onto.",
      },
      {
        kind: "p",
        text: "When David moved, God met him there. He always does.",
      },
      {
        kind: "p",
        text:
          "When you finally confront the thing that has been blocking you, the thing that has been hindering you, the very thing that has been stopping you, God will meet you at that wall. Just like the walls of Jericho. When you begin to shout unto God with a voice of triumph, that wall comes down. And you get to step into the thing you have always desired and live a life of fulfillment and joy, the kind where you wake up on a Monday morning actually excited for the week.",
      },
      {
        kind: "p",
        text:
          "Nothing will ever be perfect. But this life was meant to be enjoyed. God has given us all things to enjoy. You do not have to be sad. You do not have to be depressed. You do not have to be miserable. Yes, there will be challenges. But we have faith. And when a challenge shows up, we do not hide. We confront it.",
      },
      {
        kind: "p",
        text:
          "If someone showed up at your house trying to break in, you would not just let it happen. You would confront it. Treat your challenges the same way. You come at me with a health problem? A financial problem? Fine. I come at you in the name of the Lord. The name of the Lord is mighty to save.",
      },
      {
        kind: "p",
        text:
          "When we do what we can do, God does what only He can do. And nothing is impossible to the one who believes.",
      },
      {
        kind: "lead",
        text:
          "So whatever you are facing today, believe. Confront. Have faith. And I know God will see you through.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
