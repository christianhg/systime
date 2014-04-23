# Systime prototype
### Doc, Flemmobil & Krede
## License
Copyright &copy; 2013+ All rights reserved.

# Docpad:	
Start localhost project:
- cd /Your directory/systime 
- docpad run (in terminal/command prompt)
- localhost -> http://localhost:9778/

# Paths:
Images path example: 	
- 'assets/img/pic_name.png'

Stylesheets placed in:
- documents/assets/stylesheets
- *import new stylesheets to main.css 

Scripts placed in: 		
- documents/assets/scripts

# Jade syntax:
http://scalate.fusesource.org/documentation/jade-syntax.html

Attribtes example: 		
- img(src="assets/img/night_sky.png", width="200")
- button(type="button", data-toggle="collapse", data-target=".bs-navbar-collapse")
- a(href="", target="_blank")

Class and ID syntax:
- div#things

  	span#rice Lorem ipsum

  	p.beans The magical fruit

  	h1.class.otherclass#yourid Your text

# Boostrap
Grid system: 	
- 12 columns grid system
- .col-xs-8(Phones (<768px)) 
- .col-sm-6(Tablets (≥768px)) 
- .col-md-10(Desktops (≥992px)) 
- .col-lg-12(Desktops (≥1200px))

Offset:
- .col-md-6 .col-md-offset-3

Media queries 
- @media (max-width: @screen-phone-max) { ... }
- @media (min-width: @screen-sm) and (max-width: @screen-sm-max) { ... }
- @media (min-width: @screen-md) and (max-width: @screen-md-max) { ... }
- @media (min-width: @screen-lg) { ... }
