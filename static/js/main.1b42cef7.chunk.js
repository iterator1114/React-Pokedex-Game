(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),i=t(7),s=t.n(i),a=(t(13),t(14),t(8)),o=t(2),p=t(3),d=t(5),u=t(4),j=(t(15),t(0)),l=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){var e,n="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png");return Object(j.jsxs)("div",{className:"Pokecard",children:[Object(j.jsx)("h2",{className:"Pokecard-title",children:this.props.name}),Object(j.jsx)("div",{className:"Pokecard-img",children:Object(j.jsx)("img",{src:n,alt:this.props.name})}),Object(j.jsxs)("div",{className:"Pokecard-text",children:["Type: ",this.props.type]}),Object(j.jsxs)("div",{className:"Pokecard-text",children:["Exp: ",this.props.exp]})]})}}]),t}(c.Component),x=(t(17),function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"Pokedex",children:[Object(j.jsx)("p",{className:this.props.isWinner?"Pokedex-winner":"Pokedex-loser",children:this.props.isWinner?"Winning hand!":"Losing hand!"}),Object(j.jsxs)("p",{className:"Pokedex-exp",children:["Total Experience: ",this.props.exp," "]}),Object(j.jsx)("div",{className:"Pokedex-cards",children:this.props.Pokemon.map((function(e){return Object(j.jsx)(l,{id:e.id,name:e.name,type:e.type,exp:e.base_experience})}))})]})}}]),t}(c.Component)),b=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){for(var e=[],n=Object(a.a)(this.props.pokemon);e.length<n.length;){var t=Math.floor(Math.random()*n.length),c=n.splice(t,1)[0];e.push(c)}var r=e.reduce((function(e,n){return e+n.base_experience}),0),i=n.reduce((function(e,n){return e+n.base_experience}),0);return Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{Pokemon:e,exp:r,isWinner:r<i}),Object(j.jsx)(x,{Pokemon:n,exp:i,isWinner:r>i})]})}}]),t}(c.Component);b.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var h=b;var m=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(h,{})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.1b42cef7.chunk.js.map