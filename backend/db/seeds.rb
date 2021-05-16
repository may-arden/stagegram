# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Opera.create([
    { title: "La Boheme", 
    director: "Franco Zeffirelli", 
    description: "2019 revival of beloved 1981 Zeffirelli production", 
    img_src: "https://static01.nyt.com/images/2019/10/31/arts/27boheme3/27boheme3-jumbo.jpg"
    }
    { title: "La Boheme",
    director: "Franco Zeffirelli",
    description: "2019 revival of beloved 1981 Zeffirelli production",
    img_src: "https://static01.nyt.com/images/2018/09/27/arts/27boheme2/merlin_144322842_74306858-a036-4a0a-a8f2-b091cb2ddb3d-jumbo.jpg?quality=90&auto=webp"
    },
    { title: "Tosca",
    director: "David McVicar",
    description: "a conservative and traditional revival of McVicar's staging",
    img_src: "https://static01.nyt.com/images/2018/01/02/arts/02tosca-review2/02tosca-review2-jumbo.jpg?quality=90&auto=webp"

    }
    { title: "Tosca",
    director: "David McVicar",
    description: "a conservative and traditional staging",
    img_src: "https://static01.nyt.com/images/2017/12/31/arts/02tosca-review4/02tosca-review4-superJumbo.jpg?quality=90&auto=webp",
    },
     { title: "Turandot",
    director: "Franco Zeffirelli",
    description: "2015 revival of 1987 Zeffirelli production",
    img_src: "https://static01.nyt.com/images/2015/09/25/arts/25TURANDOT/25TURANDOT-jumbo.jpg?quality=90&auto=webp",
    },
    { title: "Otello",
    director: "Bartlett Sher",
    description: "2015 premiere of Sher's staging",
    img_src: "https://static01.nyt.com/images/2015/09/13/arts/13TOMMASINI1/13TOMMASINI1-jumbo.jpg?quality=90&auto=webp",
    },
    { title: "Don Giovanni",
    director: "Marcelo Lombardero",
    description: "2020 premiere of new staging at Teatro Mayor",
    img_src: "https://operawire.com/wp-content/uploads/2020/02/87797290_2730083613771778_5772014499078864896_o-1536x1025.jpg",
    },
    { title: "Giulio Cesare".
    director: "Robert Carsen",
    description: "2019 La Scala premiere of Carsen's staging - the first staging of Giulio Cesare at La Scala since 1956",
    img_src: "https://operawire.com/wp-content/uploads/2019/10/197_K65A1517-1400x769.jpg", 
    },
    { title: "Lucia di Lammermoor",
    director: "Barbara Wysocka",
    description: "Bayeriche Staatsoper revival of Wysocka's staging",
    img_src: "https://bachtrack.com/files/82973-lucia-di-lammermoor--v--gimadieva-c-w--hosl-9c2a6914.jpg",
    },
    { title: "Benvenuto Cellini",
    director: "Terry Gilliam",
    description: "2015 staging at the Liceu",
    img_src: "https://seenandheard-international.com/wp-content/uploads/2015/11/Cellini.jpg"
    },
    { title: "La Damnation de Faust",
    director: "Terry Gilliam",
    description: "2017 revival at the Staatsoper",
    img_src: "https://bachtrack.com/wfiles/60679-damnation-de-faust-florian-boesch--mephistopheles---charles-castronovo--faust--c-matthias-baus-resized.webp",
    },
    {title: "Pelleas et Melisande",
    director: "Jonathan Miller",
    description: "2019 revival of 1995 production which metaphorically sets the story of an ill-fated family in a Gothic 19-th century castle where outdoor forests and chalky inner sanctums seem to merge - (NYTimes).",
    img_src: "https://static01.nyt.com/images/2019/01/17/arts/17pelleas/merlin_149270280_31f9f9f1-a299-4f9f-bdb0-181815c6c6b8-superJumbo.jpg",
    }
])

avant_garde = Opera.create([ 
    {title: "Don Giovanni",
    director: "Chrispher Alden",
    description: "LA Philharmonic production with set design by Frank Gehry",
    img_src: "https://static.dezeen.com/uploads/2012/07/dezeen_Don-Giovanni-set-design-by-Frank-Gehry_1.jpg"
    },
    {title: "Pelleas et Melisande", 
    director: "Stephane Braunschweig",
    description: "2010 staging at the Opera Comique in Paris",
    img_src: "https://www.opera-comique.com/sites/TNOC/files/styles/large/public/uploads/images/galerie/131-035-bd-drelisabethcarecchio.jpg?itok=mnyy4Xqp"
    },
    {title: "Les Dialogues des Carmelites", 
    director: "John Dexter",
    description: "modern day staging by Dexter at the Met Opera",
    img_src: "https://static01.nyt.com/images/2011/11/27/arts/27TOMMASINI4/27JPTOMMASINI4-jumbo.jpg?quality=90&auto=webp"
    },
])

Collection.create([
    {name: "avant-garde", user: "May", operas: avant_garde}
])
