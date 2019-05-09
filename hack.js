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
