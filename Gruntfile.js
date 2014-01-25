module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');

/* NOTE: Client and Plugins are no longer here, so none of this is needed.  */
/* TODO: Review if we still need grunt here. */
/* IDEA: Use to run docco to produce github pages (probably replace docco...).

  grunt.initConfig({
    browserify: {
      client: {
        src: ['client/client.coffee'],
        dest: 'client/client.js',
        options: {
          transform: ['coffeeify']
        }
      },
      testClient: {
        src: ['client/testclient.coffee' ],// 'client/plugins/*/test.coffee'],
        dest: 'client/test/testclient.js',
        options: {
          transform: ['coffeeify'],
          debug: true
        }
      }
    },

    coffee: {
      plugins: {
        expand: true,
        src: ['client/plugins/**/*.coffee'],
        ext: '.js'
      } 
    },

    watch: {
      all: {
        files: [
          '<%= browserify.testClient.src %>',
          '<%= browserify.client.src %>',
          '<%= coffee.plugins.src %>',
          'client/lib/**/*.coffee'
        ],
        tasks: ['coffee', 'browserify']
      }
    }
  });

  grunt.registerTask('build', ['coffee', 'browserify']);
  grunt.registerTask('default', ['build']);

};
