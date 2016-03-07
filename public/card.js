function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "./lib/card.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

jade_debug.unshift(new jade.DebugItem( 0, "./lib/card.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "./lib/card.jade" ));
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "./lib/card.jade" ));
buf.push("<html lang=\"es\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "./lib/card.jade" ));
buf.push("<head>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "./lib/card.jade" ));
buf.push("<meta charset=\"UTF-8\">");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "./lib/card.jade" ));
buf.push("<title>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("Marvel Game Card");
jade_debug.shift();
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "./lib/card.jade" ));
buf.push("<link rel=\"stylesheet\" href=\"./css/app.css\">");
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "./lib/card.jade" ));
buf.push("<body>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "./lib/card.jade" ));
buf.push("<h1>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, jade_debug[0].filename ));
buf.push("Marvel Game Card");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "./lib/card.jade" ));
buf.push("<div class=\"Card\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, "./lib/card.jade" ));
buf.push("<h2 class=\"Card-name\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "./lib/card.jade" ));
buf.push("<img src=\"./img/wolverine.jpg\" alt=\"wolverine\" class=\"Card-image\">");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "./lib/card.jade" ));
buf.push("<div class=\"Card-description\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, jade_debug[0].filename ));
buf.push("Wolverine es muy poderoso");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 13, "./lib/card.jade" ));
buf.push("<div class=\"Card-attack\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, jade_debug[0].filename ));
buf.push("500 puntos de ataque");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\nhtml(lang=\"es\")\nhead\n  meta(charset=\"UTF-8\")\n  title Marvel Game Card\n  link(rel=\"stylesheet\" href=\"./css/app.css\")\nbody\n  h1 Marvel Game Card\n  div(class=\"Card\")\n    h2(class=\"Card-name\")\n    img(src=\"./img/wolverine.jpg\", alt=\"wolverine\",class=\"Card-image\" )\n    div(class=\"Card-description\") Wolverine es muy poderoso\n    div(class=\"Card-attack\") 500 puntos de ataque\n  \n");
}
}