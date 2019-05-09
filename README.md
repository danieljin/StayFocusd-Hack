# StayFocusd-Hack
Beat the StayFocusd Challenge popup to allow maximum procrastination

# Details 
The way the StayFocusd Challenge popup works is that it checks the following on every *keyup* event
1. The text in **textarea#challengeText** matches the challenge text.
    - This is how it ensures the text is typed correctly

2. The number of *keydown* events equal the number of characters that have been inputed into **textarea#challengeText**.
    - This is how it prevents copy and pasting.

By filling in the **textarea#challengeText** with the correct text and triggering multiple *keydown* events, both conditions 1 and 2 are met.
In order to trigger the final check of the popup, which will close the popup and give you full access, we need to trigger a final *keyup* event at the end.

# Code
Paste the following into your javascript console to have full access of your StayFocusd settings:
```
function beatTheChallenge() {
  const challengeText = `The procrastinator is often remarkably optimistic about his ability to complete a task on a tight deadline; this is usually accompanied by expressions of reassurance that everything is under control. (Therefore, there is no need to start.) Lulled by a false sense of security, time passes. At some point, he crosses over an imaginary starting time and suddenly realizes, "Oh no! I am not in control! There isn't enough time!"`;
  const arbitraryKeyCode = 65;

  $('textarea#challengeText').val(challengeText);
  
  for (var i = challengeText.length; i > 0; i--) {
    $('textarea#challengeText').trigger({ type : 'keydown', which : arbitraryKeyCode })
  }

  $('textarea#challengeText').trigger({ type : 'keyup', which : arbitraryKeyCode })
};

beatTheChallenge();
```
