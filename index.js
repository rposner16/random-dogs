'use strict';

function getDogImages(numImg) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numImg}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson, numImg))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson, numImg) {
  console.log(responseJson.message);
  //replace the existing image with the new one(s)
  $('.results').append(`<h2>Dog images:</h2>`);
  for (let i = 0; i < numImg; i++) {
    $('.results').append(`<img src="${responseJson.message[i]}" class="results-img">`);
  }
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numImg = $('.js-img-input').val();
    $('.results').empty();
    getDogImages(numImg);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});