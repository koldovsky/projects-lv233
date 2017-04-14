var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function ($scope, $mdSidenav, studentService) {
    var allStudents = [];


    $scope.subgroups = [1, 2];
    $scope.selectedsubgroups = [1, 2];
    $scope.isChosenOnly = false;
    //$scope.toggle = function (item, list) {
    //  var idx = list.indexOf(item);
    //  if (idx >-1) {
    //    list.splice(idx, 1);
    //  } else {
    //    list.push(item);
    //  }
    //};
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    $scope.toggleChosen = function (item) {
        $scope.isChosenOnly = !$scope.isChosenOnly;
    };
    //$scope.filterBySubgroup = function (student) {
    //  return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    //};

    $scope.filterByChosen = function (student) {
        if ($scope.isChosenOnly) {
            if (student.isChosenProject) {
                console.log(student);
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    };

    $scope.filterByData = function (student) {
        if (!student.websiteUrl || !student.codeSourceUrl) {
            return false;
        }
        return true;
    }

    $scope.selected = null;
    $scope.students = allStudents;
    $scope.selectStudent = selectStudent;
    $scope.toggleSidenav = toggleSidenav;

    loadStudents();

    function loadStudents() {
        studentService.loadAll()
            .then(function (students) {
                allStudents = students;
                $scope.students = [].concat(students);
                $scope.selected = $scope.students[0];
            })
    }

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    function selectStudent(student) {
        $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
        $scope.toggleSidenav('left');
    }

}]);

app.service('studentService', ['$q', function ($q) {

    //! http://www.convertcsv.com/csv-to-json.htm
    // http://www.csvjson.com/csv2json
    var students = [
        {
            "name": "Kovalov Volodymyr",
            "websiteUrl": "https://vann-dogg.github.io/ecovent-service",
            "codeSourceUrl": "https://github.com/Vann-Dogg/ecovent-service/tree/gh-pages",
            "cvUrl": "",
            "photo": "images/students/no-photo.gif"
        },
        {
            "name": "Mykulanynets' Dmytro",
            "websiteUrl": "https://dmykutc.github.io/project/",
            "codeSourceUrl": "https://github.com/dmykutc/project",
            "cvUrl": "",
            "photo": "images/students/mykulanynets.jpg"
        },
        {
            "name": "Petryshyn Mariia",
            "websiteUrl": "https://marriapetryshyn.github.io/voiskopage/",
            "codeSourceUrl": "https://github.com/MarriaPetryshyn/voiskopage",
            "cvUrl": "https://drive.google.com/drive/folders/0Byk_XSmAT7-ZVFZoczJYVV9Ma1E?usp=sharing",
            "photo": "images/students/petryshyn.jpg"
        },
        {
            "name": "Vintsevych Miroslav",
            "websiteUrl": "https://mvicttc.github.io/projecktt/",
            "codeSourceUrl": "https://github.com/mvicttc/projecktt",
            "cvUrl": "",
            "photo": "images/students/vintsevych.jpg"
        },
        {
            "name": "Bondar Oksana",
            "websiteUrl": "https://oksanabondar12.github.io/personal-website/",
            "codeSourceUrl": "https://github.com/oksanabondar12/personal-website",
            "cvUrl": "https://www.linkedin.com/in/oksana-bondar-30a884109/",
            "photo": "images/students/bondar.jpg"
        },
        {
            "name": "Gonyk Stanislav",
            "websiteUrl": "https://lienfild.github.io/laststand/",
            "codeSourceUrl": "https://github.com/LiEnfild/laststand",
            "cvUrl": "",
            "photo": "images/students/no-photo.gif"
        },
        {
            "name": "Orfinyak Anna",
            "websiteUrl": "https://annaor.github.io/mikaart/",
            "codeSourceUrl": "https://github.com/AnnaOr/mikaart",
            "cvUrl": "https://www.linkedin.com/in/annaorfinyak/",
            "photo": "images/students/orfinyak.jpg"
        },
        {
            "name": "Ogonovskyi Roman",
            "websiteUrl": "https://inf25znc1.github.io/my_site/",
            "codeSourceUrl": "https://github.com/inf25znc1/my_site",
            "cvUrl": "https://www.linkedin.com/in/roman-ogonovskyi-9aa984ba/",
            "photo": "images/students/ogonovskyi.jpg"
        },
        {
            "name": "Dutkevych Roman",
            "websiteUrl": "https://romandutkevych.github.io/my_site/",
            "codeSourceUrl": "https://github.com/romandutkevych/my_site",
            "cvUrl": "",
            "photo": "images/students/dutkevych.jpg"
        },
        {
            "name": "Prystupa Roman",
            "websiteUrl": "https://prystuparoman.github.io/project/",
            "codeSourceUrl": "https://github.com/PrystupaRoman/project",
            "cvUrl": "",
            "photo": "images/students/prystupa.jpg"
        },
        {
            "name": "Shamali Aigam",
            "websiteUrl": "https://aigamqa.github.io/full-stack-project/",
            "codeSourceUrl": "https://github.com/aigamqa/full-stack-project",
            "cvUrl": "",
            "photo": "images/students/shamali.jpg"
        },
        {
            "name": "Kukhareko Aliona",
            "websiteUrl": "https://alionak.github.io/myproject/",
            "codeSourceUrl": "https://github.com/AlionaK/myproject",
            "cvUrl": "https://www.linkedin.com/in/alyona-kukharenko-6a248a141/",
            "photo": "images/students/kukhareko.jpg"
        },
        {
            "name": "Bandrivskyi Bohdan",
            "websiteUrl": "https://skyhookmusic.github.io/skyhookpage/",
            "codeSourceUrl": "https://github.com/Skyhookmusic/skyhookpage",
            "cvUrl": "https://www.linkedin.com/in/bohdan-bandrivskyi/",
            "photo": "images/students/bandrivskyi.jpg"
        },
        {
            "name": "Frantsuz Kostiantyn",
            "websiteUrl": "https://kosfra.github.io/project/",
            "codeSourceUrl": "https://github.com/kosfra/project",
            "cvUrl": "https://www.linkedin.com/in/kostya-frantsuz",
            "photo": "images/students/frantsuz.jpg"
        },
        {
            "name": "Rakus Oleg",
            "websiteUrl": "https://olegrakus.github.io/endProjectForCourse/",
            "codeSourceUrl": "https://github.com/olegRakus/endProjectForCourse",
            "cvUrl": "",
            "photo": "images/students/rakus.jpg"
        },
        {
            "name": "Yaremii Oleh",
            "websiteUrl": "https://oljeremy.github.io/start/",
            "codeSourceUrl": "https://github.com/oljeremy/start",
            "cvUrl": "",
            "photo": "images/students/yaremii.jpg"
        },
        {
            "name": "Vynohradov Oleksandr",
            "websiteUrl": "https://artylogic.github.io/home2903mypage/.",
            "codeSourceUrl": "https://github.com/artylogic/home2903mypage",
            "cvUrl": "https://github.com/artylogic/myPhoto-Resume/tree/gh-pages/photo/cv",
            "photo": "images/students/vynohradov.jpg"
        },
        {
            "name": "Mokrytskyi Taras",
            "websiteUrl": "https://taric-m.github.io/marko-style/",
            "codeSourceUrl": "https://github.com/taric-M/marko-style",
            "cvUrl": "",
            "photo": "images/students/mokrytskyi.jpg"
        },
        {
            "name": "Lutsiv Tetiana",
            "websiteUrl": "https://tanja2602.github.io/pudra/",
            "codeSourceUrl": "https://github.com/Tanja2602/pudra",
            "cvUrl": "",
            "photo": "images/students/lutsiv.jpg"
        },
        {
            "name": "Katsma Vasylyna",
            "websiteUrl": "https://vasylynak.github.io/myproject/",
            "codeSourceUrl": "https://github.com/VasylynaK/myproject",
            "cvUrl": "https://www.linkedin.com/in/vasylyna-katsma-9b6957101/",
            "photo": "images/students/katsma.jpg"
        },
        {
            "name": "Puzikov Yurii",
            "websiteUrl": "https://yuriipuzikov.github.io/pers-webpage/",
            "codeSourceUrl": "https://github.com/YuriiPuzikov/pers-webpage",
            "cvUrl": "https://www.linkedin.com/in/yurii-puzikov",
            "photo": "images/students/puzikov.jpg"
        },
        {
            "name": "Demchyshyn Bohdan",
            "websiteUrl": "https://q2loop.github.io/html-project/",
            "codeSourceUrl": "https://github.com/q2loop/html-project",
            "cvUrl": "",
            "photo": "images/students/demchyshyn.jpg"
        },
        {
            "name": "Plechin Vasylyna",
            "websiteUrl": "https://vplechin.github.io/final-web-site/",
            "codeSourceUrl": "https://github.com/VPlechin/final-web-site",
            "cvUrl": "https://github.com/VPlechin/final-web-site/blob/gh-pages/resume%20Plechin.pdf",
            "photo": "images/students/plechin.jpg"
        },
        {
            "name": "Yovchenko Volodymyr",
            "websiteUrl": "https://yovchenko.jpg.github.io/gas-service-/",
            "codeSourceUrl": "https://github.com/yovchenko.jpg/gas-service-",
            "cvUrl": "https://www.linkedin.com/in/vladimir-yovchenko.jpg-580525b0/",
            "photo": "images/students/yovchenko.jpg"
        },
        {
            "name": "Petrenko Viktor",
            "websiteUrl": "https://wood-dreams-balfire.c9users.io/index.html",
            "codeSourceUrl": "https://github.com/Hatenkou/wood-dreams",
            "cvUrl": "",
            "photo": "images/students/petrenko.jpg"
        },
        {
            "name": "Kostyuk Marta",
            "websiteUrl": "https://martakost.github.io/Personal-Webpage/",
            "codeSourceUrl": "https://github.com/Martakost/Personal-Webpage",
            "cvUrl": "",
            "photo": "images/students/kostyuk.jpg"
        }
    ];

    // Promise-based API
    return {
        loadAll: function () {
            // Simulate async nature of real remote calls
            return $q.when(students);
        }
    };
}]);
