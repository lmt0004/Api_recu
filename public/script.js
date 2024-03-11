/*$(document).ready(function() {
  
    $("#getDataBtn").on("click", function() {
      // Cambia el color de fondo del body a negro al obtener personajes
      $("body").css("background-color", "black");
      $(".container").css("background-image", "none");
      $("#ricky-morty-text").html('<span>Ricky</span><span>Morty</span>');
      
      $.ajax({
        url: "https://rickandmortyapi.com/api/character/",
        method: "GET",
        success: function(data) {
          // Procesa y muestra los resultados
          displayResults(data.results);
        },
        error: function(error) {
          console.error("Error en la petición:", error);
          $("#results").html("<p>Error al obtener datos. Por favor, intenta de nuevo.</p>");
        }
      });
  
      // Función para realizar la búsqueda por nombre
      $("#searchBtn").on("click", function() {
       
        // Obtiene el valor de la barra de búsqueda y elimina espacios en blanco al inicio y al final
        var searchTerm = $("#searchInput").val().trim().toLowerCase();
    
        // Valida que el campo de búsqueda no esté vacío
        if (searchTerm !== "") {
          $.ajax({
            url: "https://rickandmortyapi.com/api/character/?name=" + searchTerm,
            method: "GET",
            success: function(data) {
              // Procesa y muestra los resultados de la búsqueda
              displayResults(data.results);
            },
            error: function(error) {
              console.error("Error en la búsqueda:", error);
              $("#results").html("<p>Error al realizar la búsqueda. Por favor, intenta de nuevo.</p>");
            }
          });
        } else {
          // Muestra un mensaje si el campo de búsqueda está vacío
          $("#results").html("<p>Por favor, ingresa un nombre para buscar.</p>");
        }
      });
    
      // Función para mostrar los resultados en el área de resultados
      function displayResults(characters) {
        $("#results").html(""); // Limpia el área de resultados antes de mostrar nuevos datos
        $(".container").css("background-image", "none");
        $("#ricky-morty-text").html('<span>Ricky</span><span>Morty</span>');
        // Muestra cada personaje que coincida con la búsqueda
        characters.forEach(function(character) {
          $("#results").append(`
            <div class="character">
              <img src="${character.image}" alt="${character.name}">
              <p><strong>${character.name}</strong></p>
              <p>${character.species} - ${character.status}</p>
            </div>
          `);
        });
      }
    }
  
    );
  });*/
  /*$(document).ready(function() {
    $("#getDataBtn").on("click", function() {
      // Cambia el color de fondo del body a negro al obtener personajes
      $("body").css("background-color", "black");
      $(".container").css("background-image", "none");
      $("#ricky-morty-text").html('<span>Ricky</span><span>Morty</span>');
  
      $.ajax({
        url: "/api/characters",
        method: "GET",
        success: function(data) {
          // Procesa y muestra los resultados
          displayResults(data);
        },
        error: function(error) {
          console.error("Error en la petición:", error);
          $("#results").html("<p>Error al obtener datos. Por favor, intenta de nuevo.</p>");
        }
      });
    });
  
    // Función para realizar la búsqueda por nombre
    $("#searchBtn").on("click", function() {
      // Obtiene el valor de la barra de búsqueda y elimina espacios en blanco al inicio y al final
      var searchTerm = $("#searchInput").val().trim().toLowerCase();
  
      // Valida que el campo de búsqueda no esté vacío
      if (searchTerm !== "") {
        $.ajax({
          url: "/api/characters/search?name=" + searchTerm,
          method: "GET",
          success: function(data) {
            // Procesa y muestra los resultados de la búsqueda
            displayResults(data);
          },
          error: function(error) {
            console.error("Error en la búsqueda:", error);
            $("#results").html("<p>Error al realizar la búsqueda. Por favor, intenta de nuevo.</p>");
          }
        });
      } else {
        // Muestra un mensaje si el campo de búsqueda está vacío
        $("#results").html("<p>Por favor, ingresa un nombre para buscar.</p>");
      }
    });
  
    // Función para mostrar los resultados en el área de resultados
    function displayResults(characters) {
      $("#results").html(""); // Limpia el área de resultados antes de mostrar nuevos datos
      $(".container").css("background-image", "none");
      $("#ricky-morty-text").html('<span>Ricky</span><span>Morty</span>');
      // Muestra cada personaje que coincida con la búsqueda
      characters.forEach(function(character) {
        $("#results").append(`
          <div class="character">
            <img src="${character.image}" alt="${character.name}">
            <p><strong>${character.name}</strong></p>
            <p>${character.species} - ${character.status}</p>
          </div>
        `);
      });
    }
  });*/

  $(document).ready(function() {
    $("#getDataBtn").on("click", function() {
      // Cambia el color de fondo del body a negro al obtener personajes
      $("body").css("background-color", "black");
      $(".container").css("background-image", "none");
      $("#ricky-morty-text").html('<span>Ricky</span><span>Morty</span>');
  
      $.ajax({
        url: "/api/characters",
        method: "GET",
        success: function(data) {
          // Procesa y muestra los resultados
          displayResults(data);
        },
        error: function(error) {
          console.error("Error en la petición:", error);
          showError("Error al obtener datos. Por favor, intenta de nuevo.");
        }
      });
    });
  
    // Función para realizar la búsqueda por nombre
    $("#searchBtn").on("click", function() {
      // Obtiene el valor de la barra de búsqueda y elimina espacios en blanco al inicio y al final
      var searchTerm = $("#searchInput").val().trim().toLowerCase();
  
      // Valida que el campo de búsqueda no esté vacío
      if (searchTerm !== "") {
        $.ajax({
          url: "/api/characters/search?name=" + searchTerm,
          method: "GET",
          success: function(data) {
            // Procesa y muestra los resultados de la búsqueda
            displayResults(data);
          },
          error: function(error) {
            console.error("Error en la búsqueda:", error);
            showError("Error al realizar la búsqueda. Por favor, intenta de nuevo.");
          }
        });
      } else {
        // Muestra un mensaje si el campo de búsqueda está vacío
        showError("Por favor, ingresa un nombre para buscar.");
      }
    });
  
    // Función para mostrar los resultados en el área de resultados
    function displayResults(characters) {
      $("#results").html(""); // Limpia el área de resultados antes de mostrar nuevos datos
      $(".container").css("background-image", "none");
      $("#ricky-morty-text").html('<span>Ricky</span><span>Morty</span>');
      // Muestra cada personaje que coincida con la búsqueda
      characters.forEach(function(character) {
        $("#results").append(`
          <div class="character">
            <img src="${character.image}" alt="${character.name}">
            <p><strong>${character.name}</strong></p>
            <p>${character.species} - ${character.status}</p>
          </div>
        `);
      });
    }
  
    // Función para mostrar mensajes de error usando SweetAlert
    function showError(message) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
    }
  });
  
  
  
 