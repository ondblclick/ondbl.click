export default {
  1:  { n:  2, m: 'Hello? Is anybody there?', author: 'H' },
  2:  { n:  3, m: 'Hi. Yeah, it\'s me', author: 'D' },
  3:  { n:  4, m: 'You\'re not here.', author: 'H' },
  4:  { n:  5, m: 'No…', author: 'D' },
  5:  { n:  6, m: 'Don\'t be mad', author: 'D' },
  6:  {        m: ['I am. -> 7', 'I\'m not. -> 22', 'I\'m disappointed. -> 27'] },
  7:  { n:  8, m: 'I am.', author: 'H' },
  8:  { n:  9, m: 'Well I couldn\'t be out there another minute.', author: 'D' },
  9:  { n: 10, m: 'Not ANOTHER minute? Come on.', author: 'H' },
  10: { n: 11, m: 'Henry, how did you feel when you left Boulder to come out here?', author: 'D' },
  11: { n: 12, m: 'Like I couldn\'t get here fast enough.', author: 'H' },
  12: { n: 13, m: 'Exactly. That\'s how I\'ve felt for the past 24 hours.', author: 'D' },
  13: { n: 14, m: 'Well, I\'m still mad.', author: 'H' },
  14: { n: 15, m: 'But you understand?', author: 'D' },
  15: {        m: ['Yes. -> 16', 'No. -> 17', 'It doesn\'t matter. -> 20'] },
  16: { n: 37, m: 'Sure. Yeah.', author: 'H' },
  17: { n: 18, m: 'Not really. It was just a few minutes.', author: 'H' },
  18: { n: 19, m: 'I\'m sorry.', author: 'D' },
  19: { n: 37, m: 'It\'s alright.', author: 'H' },
  20: { n: 21, m: 'Eh, what\'s it matter if I do?', author: 'H' },
  21: { n: 37, m: 'Well, I\'m sorry anyway.', author: 'D' },
  22: { n: 23, m: 'I\'m not.', author: 'H' },
  23: { n: 24, m: 'I just couldn\'t be out there for another minute.', author: 'D' },
  24: { n: 25, m: 'I get it.', author: 'H' },
  25: { n: 26, m: 'You… you do?', author: 'D' },
  26: { n: 37, m: 'I think so.', author: 'H' },
  27: { n: 28, m: 'I\'m not mad, I\'m just—', author: 'H' },
  28: { n: 29, m: 'You\'re not mad, you\'re just disappointed?', author: 'D' },
  29: { n: 30, m: 'I\'m not your dad after you got busted smoking pot.', author: 'H' },
  30: { n: 31, m: 'I just couldn\'t be out there for another minute.', author: 'D' },
  31: { n: 32, m: 'You could\'ve just said that.', author: 'H' },
  32: { n: 33, m: 'You really wanted me to stay.', author: 'D' },
  33: { n: 34, m: 'I did, and now I\'m—', author: 'H' },
  34: { n: 35, m: 'Disappointed.', author: 'D' },
  35: { n: 36, m: 'Yeah.', author: 'H' },
  36: { n: 37, m: 'I know.', author: 'D' },
  37: null,
}

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
