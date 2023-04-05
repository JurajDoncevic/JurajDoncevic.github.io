/* NAPOMENA:
   Ukljuciti ovaj file u svaki template koji poziva tekst generiran sa HTMLArea-om
   tj. ako se koristi HTMLArea plugin EmailProtect ili {v1email}
*/


// This work is hereby released into the Public Domain. To view a copy of 
// the public domain dedication, visit http://creativecommons.org/licenses/publicdomain/ 
// or send a letter to Creative Commons, 559 Nathan Abbott Way, Stanford, California 94305, USA.
// origin: 2000-01-08 nospam@geht.net http://tools.geht.net/rot13.html
// Use at own risk.
var last = "";
var rot13map;

// The problem is that JavaScript 1.0
// does not provide a Char to Numeric value conversion
// Thus we define a map.
// Because there are 64K UniCode characters, this map does not cover all characters.
function rot13init() {
  var map = new Array();
  var s = "abcdefghijklmnopqrstuvwxyz";

  for (i = 0; i < s.length; i++)
    map[s.charAt(i)] = s.charAt((i + 13) % 26);
  for (i = 0; i < s.length; i++)
    map[s.charAt(i).toUpperCase()] = s.charAt((i + 13) % 26).toUpperCase();
  return map;
}

function rot13(a) {
  if (!rot13map)
    rot13map = rot13init();
  s = "";
  for (i = 0; i < a.length; i++) {
    var b = a.charAt(i);

    s += (b >= 'A' && b <= 'Z' || b >= 'a' && b <= 'z' ? rot13map[b] : b);
  }
  return s;
}


function convertMail(text) {
  var Res = "";
  var Count;
  text = rot13(text);
  for (Count = 0; Count < text.length; Count += 2) {
    Char = text.substring(Count + 1, Count + 2);
    Res += Char;
    Char = text.substring(Count, Count + 1);
    Res += Char;
  }
  return Res;
}

/**
 * Dekodira email adresu i starta defaultni email reader
 */
function startMail(text) {
  var Res = convertMail(text);
  location = "mailto:" + Res;
}

/**
 * Dekodira email adresu (fck) i posjecuje ju
 */
function cms_mail(name, domain, subject, body) {
  var location = "mailto:" + name + "@" + domain;
  if (subject != '') {
    location = location + "?subject=" + subject;
    if (body != '') {
      location = location + "&body=" + decodeURIComponent(body);
    }
  } else {
    if (body != '') {
      location = location + "?body=" + body;
    }
  }
  window.location = location;
}