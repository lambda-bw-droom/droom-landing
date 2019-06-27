# droom-landing

Project title

DROOM - Changing the way you connect with employers/employees

Motivation

Our app helps job seekers find jobs and helps companies find qualified employees in a fun and innovative way. Droom's mission is to add a more personal approach to the job search process,and end that feeling of uncertainty as you toss your resume into the classified chasm.

An elegant single page lander with animated tabs for the tinder meets linkedin game changer.

Design inspired by the Netflix landing page.

Languages & tools
HTML
HTML5

JavaScript
Javascript
CSS
Less
Animate.css
FontAwesome
GoogleFonts - Fonts used: Teko, Montserrat.

Colors used: #98C1D9 #E0FBFC #EE6C4D #293241.
Design features

Header: The header is composed of an animated background image, our logo, sign in button, h1, p, and a sign up button:
Animated Background Image
Three divs are assigned the following classes: ‘stars’, ‘twinkling’, and ‘clouds’.
The stars class takes stars.png and is a static image.
The twinkling class takes twinkling.png and is repeated across the viewport and is animated so it will translate across the stars image giving the appearance of twinkling.
The clouds class takes the clouds1.png image and works similarly to the twinkling class.
These classes are given a lower z-index to the content in the header.


Tabs:
	About: The first tab was animated with animate.css and is shown on page load. This serves as an introduction to Droom, the latest way to land your dream job. The tabs were created using Javascript as well as CSS. Event listeners handled the adding and removing of classes which allowed each of the tabs to either appear or hide. Selecting a tab also hides all other tabs so that only the information from a single tab is ever visible.

Responsiveness: Media breakpoints were set at max-width of 500 pixels for mobile and 800 pixels for our “tablet” view. Tablet view reduces clutter in the tab section by not displaying the images and bringing the three column Dev Tam tab-content, to a 2 column grid. For mobile view,  The flavor text under the h1 under showcase was hidden and the size of the sign-up/sign-in was increased. The viewport height for the showcase area for both the tablet and mobile view was changed from 75vh to 100vh for cleanliness. 


Credits

Team Lead

Ryan Clark

Front End Architect

Sulaiman 'Yemi' Abidemi
Jaytee Padilla

Back End Architect

Cash Globe

Web UI Developer

Anthony Rende
Deejay Easter
Connor Claxton


<link href="https://fonts.googleapis.com/css?family=Amatic+SC:700|Josefin+Slab&display=swap" rel="stylesheet">

