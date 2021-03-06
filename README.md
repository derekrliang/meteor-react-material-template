# meteor-react-material-template

Yet another meteor template.

Currently based on the latest and greatest (experimental) version of Meteor:
* 1.3-beta.11

**Please note that this is using the experimental version of Meteor, bugs are to be expected.**

### What This Template Has
* Meteor, React (npm), Materialize (meteor)
* Registration and Login using accounts-password (meteor)
* Example usage of Materialize components and design 
* Basic group-based routing using FlowRouter (meteor)

### Getting Started

```
$ git clone --depth=1 https://github.com/derekrliang/meteor-react-material-template.git MyApp
$ rm -rf !$/.git
$ cd MyApp
$ npm install
$ meteor
```

### Objective
* Explore the newest version of Meteor and find bugs/defects.
* Establish a template for new Meteor projects that hope to baseline on the latest baseline.
* Learn ES6 and new Meteor features.

### Design Decisions/Notes

#### Inline styles vs. CSS/SCSS (02/21/16)
Initially, the plan was to use Material-UI since it had synergy with React. After fiddling around with inline/JS injected styles, I still prefer CSS/SCSS because 1) it can be cached, 2) not JS dependent, and 3) CSS is just simpler. Material-UI is nice, but I don't think we are ready to take on inline styles as a replacement for CSS just yet. I then switched to Materialize.
