import $ from "jquery";

function NotFoundScript() {
  var inputReady = true;
  var input = $(".404-input");
  input.focus();
  $(".container").on("click", function (e) {
    input.focus();
  });

  input.on("keyup", function (e) {
    $(".new-output").text(input.val());
    // console.log(inputReady);
  });

  $(".four-oh-four-form").on("submit", function (e) {
    e.preventDefault();
    resetForm(0);
  });
}

function resetForm(firstRun) {
  var input = $(".404-input");
  var parsedInput = input
    .val()
    .split(/(\s+)/)
    .filter(function (e) {
      return e.trim().length > 0;
    });
  var message = "-bash: " + input.val() + ": command not found";
  if (firstRun === 1) message = "";

  if (parsedInput.length === 1 && parsedInput[0] === "clear") {
    message = "";
    var clear = true;
    $(".terminal").children("img").remove();
    $(".terminal").children("p").remove();
    $(".terminal").children("div").remove();
    $("terminal").append(
      "<p class='prompt'>" +
        message +
        '</p><p class="prompt output new-output"></p>'
    );
  }

  if (parsedInput.length === 1 && parsedInput[0] === "ls") {
    message = "resume    Home";
    $("terminal").append(
      '<p class="prompt">' +
        message +
        '</p><p class="prompt output new-output"></p>'
    );
  }

  // if (
  //   parsedInput.length === 2 &&
  //   parsedInput[0] === "cd" &&
  //   parsedInput[1].toLowerCase() === "resume"
  // ) {
  //   message = "You will be redirected to resume in 3 seconds";
  //   var resume = true;
  // }

  if (
    parsedInput.length === 2 &&
    parsedInput[0] === "cd" &&
    parsedInput[1].toLowerCase() === "resume"
  ) {
    message = "You will be redirected to resume in 3 seconds";
    var resume = true;
  }

  if (
    (parsedInput.length === 2 &&
      parsedInput[0] === "cd" &&
      parsedInput[1].toLowerCase() === "home") ||
    (parsedInput.length === 1 && parsedInput[0].toLowerCase() === "exit")
  ) {
    message = "You will be redirected to home in 3 seconds";
    var home = true;
  }

  $(".new-output").removeClass("new-output");
  input.val("");

  $(".terminal").append(
    firstRun !== 1
      ? '<p class="prompt">' +
          message +
          '</p><p class="prompt output new-output"></p>'
      : '</p><p class="prompt output new-output"></p>'
  );

  if (clear) {
    errMsg();
    resetForm(1);
    clear = false;
  } else if (resume) {
    setTimeout(function () {
      window.location.href = "Resume/GiorgioAtanasovResume.pdf";
    }, 3000);
  } else if (home) {
    setTimeout(function () {
      window.location.href = "/";
    }, 3000);
  }
  $("html, body").scrollTop($(document).height());
}

function errMsg() {
  $(".terminal").append(
    "<div class='errorMessage'>" +
      "<p class='prompt' style='color:white' id='glitch' data-text='&lt;!DOCTYPE html&gt'>&lt;!DOCTYPE html&gt</p>" +
      "<p class='prompt' id='orange'>&lt;html&gt; </p>" +
      "<p class='prompt' id='orange'>&lt;style&gt;</p>" +
      "<p class='prompt' id='white'> { *   </p>" +
      "<p class='prompt' style='color:white' id='glitch' data-text='Commands: ls    cd    clear    exit'>Commands: ls    cd    clear    exit</p>" +
      "<p class='prompt' id='white'>   }</p>" +
      "<p class='prompt'id='orange'>&lt;/style&gt;</p>" +
      "<p class='prompt' id='orange'>&lt;body&gt;</p>" +
      "<p class='prompt' style='color:red' id='glitch' data-text='Error:404!'>Error 404!</p>" +
      "<p class='prompt' style='color:red' id='glitch' data-text='     FILE NOT FOUND!'>     FILE NOT FOUND!</p>" +
      "<p class='prompt' style='color: #7f8c8d' id='glitch' data-text='&lt;!--The file you are looking for, is not where you think it is.--&gt;'>&lt;!--The file you are looking for, is not where you think it is.--&gt;</p>" +
      "<p class='prompt' id='orange'>&nbsp;&lt;/body&gt;</p>" +
      "<p class='prompt' style='color: #f39c12' id='glitch' data-text='>&lt;/html&gt;'>&lt;/html&gt;</p>" +
      "</div>"
  );

  var lines = $(".errorMessage p");
  $.each(lines, function (index, line) {
    setTimeout(function () {
      $(line).css({
        opacity: 1,
      });

      textEffect($(line));
    }, index * 100);
  });
}

function textEffect(line) {
  var alpha = [";", ".", ",", ":", ";", "~", "`"];
  var animationSpeed = 27;
  var index = 0;
  var string = line.text();
  var splitString = string.split("");
  var copyString = splitString.slice(0);

  var emptyString = copyString.map(function (el) {
    return [alpha[Math.floor(Math.random() * alpha.length)], index++];
  });

  emptyString = shuffle(emptyString);

  $.each(copyString, function (i, el) {
    var newChar = emptyString[i];
    toUnderscore(copyString, line, newChar);

    setTimeout(function () {
      fromUnderscore(copyString, splitString, newChar, line);
    }, i * animationSpeed);
  });
}

function toUnderscore(copyString, line, newChar) {
  copyString[newChar[1]] = newChar[0];
  line.text(copyString.join(""));
}

function fromUnderscore(copyString, splitString, newChar, line) {
  copyString[newChar[1]] = splitString[newChar[1]];
  line.text(copyString.join(""));
}

function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}

export { NotFoundScript, errMsg, resetForm };
