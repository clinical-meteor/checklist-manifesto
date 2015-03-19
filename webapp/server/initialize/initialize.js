// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  // process.env.MAIL_URL = '';

  if (Lists.find().count() === 0) {
    var data = [
      {name: "Change Bed Linens",
       url: "http://www.suagm.edu/umet/biblioteca/Reserva_Profesores/maritza_acevedo_nurs_230_101/cama_abierta_y_ocupada.pdf",
       items: [
         "Introduced self and verified patient’s identity.",
         "Explained procedure to patient.",
         "Gathered appropriate equipment.",
         "Performed hand hygiene and observed other appropriate infection control procedures.",
         "Provided for patient privacy.",
         "Placed fresh linen on patient’s chair or overbed table.",
         "Assessed and assisted patient out of bed using assistance devices, if needed.",
         "Raised the bed to a comfortable working height.",
         "Applied clean gloves if linens and equipment were soiled with secretions and/or excretions.",
         "Stripped the bed.",
         "Applied the bottom sheet and drawsheet.",
         "Moved to the other side and secured the bottom linens.",
         "Applied or completed the top sheet, blanket, and spread.",
         "Put clean pillowcases on the pillows and placed pillow(s) at head of bed.",
         "Provided for patient comfort and safety."
       ]
      },
      {name: "Take Blood Sample from Ebola Patient (WHO)",
      url: "http://who.int/csr/resources/publications/ebola/blood-collect-en.pdf",
       items: [
         "Step 1a:  Assemble equipment for collecting blood.",
         "Step 1b: Assemble equipment for preventing infections.",
         "Step 1c: Fill out patient documentation.",
         "Step 1d: Assemble materials for packaging of samples.",
         "Step 2a: Perform hand hygiene.",
         "Step 2b: Put on a gown.",
         "Step 2c: Put on face protection.",
         "Step 2d: Put on gloves (over gown cuffs).",
         "Step 3a: Prepare room.",
         "Step 3b: Identify and prepare the patient.",
         "Step 3c: Select the site, preferably at the bend of the elbow.",
         "Step 3d. Apply a tourniquet around the arm.",
         "Step 3e: Ask the patient to form a fist so that the veins are more prominent.",
         "Step 3f: Disinfect the area where you will put the needle.",
         "Step 3g: When using vacuum extraction system with holder, insert the blood collector tube into the holder.",
         "Step 3h: Anchor the vein.",
         "Step 3i: Perform the blood draw.",
         "Step 3j: When blood starts to flow, ask patient to open his/her hand.",
         "Step 3k: Once sufficient blood has been collected (minimum 5ml), release the tourniquet BEFORE withdrawing the needle.",
         "Step 3l: Withdraw the needle gently.",
         "Step 3l: Withdraw the needle gently.",
         "Step 3m: Remove blood collector tube from holder and put into rack.",
         "Step 3n: Put needle into leak-proof and puncture resistant sharps container.",
         "Step 3o: Stop the bleeding and clean the skin.",
         "Step 3p: Put items that drip blood or have body fluids on them into the infectious waste bag for destruction.",
         "Step 4a: Take the blood tube from the tray and wipe the blood tube with a disposable paper towel.",
         "Step 4c: Place all items that came into contact with blood into the infectious waste bag for destruction.",
         "Step 4d: Protect the sample from breaking during transport by wrapping the tube of blood in a paper towel.",
         "Step 4e: Ask the designated assistant to approach the patient room, without entering.",
         "Step 4f: The person who has collected the blood sample should put the wrapped tube of blood into the plastic leak- proof packaging container.",
         "Step 4g: Have the designated, gloved assistant tightly close the top of the plastic leak- proof packaging container.",
         "Step 5a: Remove the gloves.",
         "Step 5b: Remove the gown",
         "Step 5c: Perform Hand hygiene.",
         "Step 5d: Take off face protection",
         "Step 5e: Perform Hand hygiene."
         ]
      }
    ];
    var timestamp = (new Date()).getTime();

    data.forEach(function(list){
      var list_id = Lists.insert({name: list.name,
        incompleteCount: list.items.length});

      if(list.items){
        list.items.forEach(function(text){
          // add a new task
          Todos.insert({
            listId: list_id,
            public: true,
            text: text,
            createdAt: new Date(timestamp)}
          );

          // ensure unique timestamp.
          timestamp += 1;
        });
      }
    });
  }
});
