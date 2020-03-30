export default [
  { id: 1,  next:  2,   message: 'Hello? Is anybody there?', author: 'H' },
  { id: 2,  next:  3,   message: 'Hi. Yeah, it\'s me', author: 'D' },
  { id: 3,  next:  4,   message: 'You\'re not here.', author: 'H' },
  { id: 4,  next:  5,   message: 'No…', author: 'D' },
  { id: 5,  next:  6,   message: 'Don\'t be mad', author: 'D' },
  { id: 6,              message: ['I am. -> 7', 'I\'m not. -> 22', 'I\'m disappointed. -> 27'] },
  { id: 7,  next:  8,   message: 'I am.', author: 'H' },
  { id: 8,  next:  9,   message: 'Well I couldn\'t be out there another minute.', author: 'D' },
  { id: 9,  next: 10,   message: 'Not ANOTHER minute? Come on.', author: 'H' },
  { id: 10, next: 11,   message: 'Henry, how did you feel when you left Boulder to come out here?', author: 'D' },
  { id: 11, next: 12,   message: 'Like I couldn\'t get here fast enough.', author: 'H' },
  { id: 12, next: 13,   message: 'Exactly. That\'s how I\'ve felt for the past 24 hours.', author: 'D' },
  { id: 13, next: 14,   message: 'Well, I\'m still mad.', author: 'H' },
  { id: 14, next: 15,   message: 'But you understand?', author: 'D' },
  { id: 15,             message: ['Yes. -> 16', 'No. -> 17', 'It doesn\'t matter. -> 20'] },
  { id: 16, next: 37,   message: 'Sure. Yeah.', author: 'H' },
  { id: 17, next: 18,   message: 'Not really. It was just a few minutes.', author: 'H' },
  { id: 18, next: 19,   message: 'I\'m sorry.', author: 'D' },
  { id: 19, next: 37,   message: 'It\'s alright.', author: 'H' },
  { id: 20, next: 21,   message: 'Eh, what\'s it matter if I do?', author: 'H' },
  { id: 21, next: 37,   message: 'Well, I\'m sorry anyway.', author: 'D' },
  { id: 22, next: 23,   message: 'I\'m not.', author: 'H' },
  { id: 23, next: 24,   message: 'I just couldn\'t be out there for another minute.', author: 'D' },
  { id: 24, next: 25,   message: 'I get it.', author: 'H' },
  { id: 25, next: 26,   message: 'You… you do?', author: 'D' },
  { id: 26, next: 37,   message: 'I think so.', author: 'H' },
  { id: 27, next: 28,   message: 'I\'m not mad, I\'m just—', author: 'H' },
  { id: 28, next: 29,   message: 'You\'re not mad, you\'re just disappointed?', author: 'D' },
  { id: 29, next: 30,   message: 'I\'m not your dad after you got busted smoking pot.', author: 'H' },
  { id: 30, next: 31,   message: 'I just couldn\'t be out there for another minute.', author: 'D' },
  { id: 31, next: 32,   message: 'You could\'ve just said that.', author: 'H' },
  { id: 32, next: 33,   message: 'You really wanted me to stay.', author: 'D' },
  { id: 33, next: 34,   message: 'I did, and now I\'m—', author: 'H' },
  { id: 34, next: 35,   message: 'Disappointed.', author: 'D' },
  { id: 35, next: 36,   message: 'Yeah.', author: 'H' },
  { id: 36, next: 37,   message: 'I know.', author: 'D' },
  { id: 37, next: null, message: null, author: null },
];

/*
=== Part 1

H: Hello? Is anybody there?
D: Hi. Yeah, it's me.
H You're not here.
D: No…
D: Don't be mad.

H: I am. -> I am.
  D: Well I couldn't be out there another minute.
  H: Not ANOTHER minute? Come on.
  D: Henry, how did you feel when you left Boulder to come out here?
  H: Like I couldn't get here fast enough.
  D: Exactly. That's how I've felt for the past 24 hours.
  H: Well, I'm still mad.
  D: But you understand?

  H: Yes. -> Sure. Yeah.

  H: No. -> Not really. It was just a few minutes.
    D: I'm sorry.
    H: It's alright.

  H: It doesn't matter. -> Eh, what's it matter if I do?
    D: Well, I'm sorry anyway.

H: I'm not. -> I'm not.
  D: I just couldn't be out there for another minute.
  H: I get it.
  D: You… you do?
  H: I think so.

H: I'm disappointed. -> I'm not mad, I'm just—
  D: You're not mad, you're just disappointed?
  H: I'm not your dad after you got busted smoking pot.
  D: I just couldn't be out there for another minute.
  H: You could've just said that.
  D: You really wanted me to stay.
  H: I did, and now I'm—
  D: Disappointed.
  H: Yeah.
  D: I know.

=== Part 2

D: It shouldn't take long for the helicopter to reach you.
H: Okay.
D: There's a debrief in a situation like this. Lots of questions.
H: Ugh, shit.
H: So, taking stock. We found out an old lookout killed his only son and decided to become a lonely hermit.
D: Yes.
H: And we prevented… one fire?
D: Basically started another.
H: Okay so that's a wash.
D: I'll have to figure out what I'm doing every summer from now on that isn't this.
H: You're not coming back?
D: No. And you'll have to… I don't know.
H: Me neither. I don't know what's next.
D: Tell you what: why don't you choose me for me, and I'll choose you for you.
H: Ha. Alright, sure. Maybe…

H: Come to Boulder with me. -> Maybe you could come back to Boulder with me and figure it out down there.
  D: Um…
  H: Just… just a thought.
  D: You don't want me down there.
  H: Well, I just asked you.
  D: I've got some things to do in Casper and maybe I'll head south sometime after that. I could come by. Sure.
  H: Okay.

H: Move to Santa Fe. -> Maybe move to Santa Fe. Open a jade emporium with your sister.
  D: Hmm… I'd be trading cute ski bums for yoga retreat hippies but maybe that's not all bad.
  H: Plus the margarita situation.
  D: I mean, yeah.

H: You'd make a good shrink. -> Well, you'd make a great shrink.
  D: Are you kidding me? You spent ten weeks with me and God knows how much therapy it's going to take to undo this experience.
  H: You're a good conversationalist, I guess.
  D: Thanks. I try.
  H: I mean, you definitely still have some stuff to learn at shrink school. Like a lot of stuff.
  D: Noted.

=== Part 3

H: So… so what about me?
D: I think you should go to Julia.  And then you can figure it out. Maybe put that typewriter to good use. Give me a sexy accent or something if you write about this.
H: I, umm… yeah.
D: You gotta go see her.

H: Would you? -> Would you? {same as below}
H: Yeah, sure. -> Yeah, sure. {same as below}
H: … ->
  D: Henry… I. You came out to put your memories behind you and they're still right there in front of you.

  H: I'll go see her. -> You're right. I mean… I think you're right.
    D: Good.
    H: When I get back, maybe I could…
    D: We shouldn't focus on this summer. Next year will roll around, and then the year after that, and then it's just a… I don't know. My Aunt Judy called it a pause in the hallway of time.
    H: Did your Aunt Judy smoke a lot of pot?
    D: Yeah.
    H: You should try to take her advice too.
    D: Yeah we'll see.

  H: I have to move on. -> I've… I gotta move on. I don't expect you to know what that's like but I have to find some way to move on. Something to do.
    D: What if you can't?
    H: Then… that's why God invented booze, I guess.
    D: Henry…
    H: I'm kidding.
    H: I gotta move on. Somehow.
    D: I hope you do.

  H: She won't recognize me. -> She won't even recognize me, Delilah.
    D: You're not just going for her.
    H: You don't know what it's like.
    D: Ugh. Bad things happen, okay? And you have to… you HAVE to find a way to contain the damage. A good way.
    H: Hopefully I can figure out a way to do that.
    D: Yeah, I hope so.
    H: God, this got dark.
    D: No shit. Sorry.
*/
