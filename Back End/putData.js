const mongoose = require("mongoose");

module.exports.putData = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/timetableReactDB", {
    useNewUrlParser: true,
  });

  //making the collections

  const classTimetableSchema = new mongoose.Schema({
    class: String,
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  });
  const ClassTimetable = mongoose.model("ClassTimetable", classTimetableSchema);

  //creating the timetables

  ClassTimetable.find({ class: "BBA-I" }, (err, classFound) => {
    if (classFound.length === 0) {
      const BBA1 = new ClassTimetable({
        class: "BBA-I",
        monday: [
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
        ],
        tuesday: [
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
        ],
        wednesday: [
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
        ],
        thursday: [
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
        ],
        friday: [
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
        ],
        saturday: [
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
          "UBBA-101",
        ],
        before: ["Class", "Class", "Class", "Class", "Class", "Class"],
      });
      BBA1.save();
    }
  });

  ClassTimetable.find({ class: "BBA-II" }, (err, classFound) => {
    if (classFound.length === 0) {
      const BBA2 = new ClassTimetable({
        class: "BBA-II",
        monday: [
          "UBBA-401",
          "UBBA-402",
          "UBBA-403",
          "UGEN-401",
          "Free",
          "Sec Lang",
        ],
        tuesday: [
          "UGEN-401",
          "UBBA-403",
          "Sec Lang",
          "UBBA-404",
          "UBBA-404",
          "UBBA-402",
        ],
        wednesday: [
          "UAWR-400",
          "UBBA-402",
          "INTERNET",
          "Sec Lang",
          "UBBA-402",
          "UGEN-401",
        ],
        thursday: [
          "Moral Class",
          "UBBA-403",
          "UBBA-401",
          "UBBA-403",
          "UBBA-401",
          "Colloquium",
        ],
        friday: [
          "UBBA",
          "UBBA-404",
          "UBBA-404",
          "UBBA",
          "UBBA",
          "UAWR-400",
          "INTERNET",
        ],
        saturday: ["UGEN-401", "Free", "Free", "Free", "Free", "Free"],
        before: ["Class", "Class", "Class", "Class", "Class", "Class"],
      });
      BBA2.save();
    }
  });

  ClassTimetable.find({ class: "BBA-III" }, (err, classFound) => {
    if (classFound.length === 0) {
      const BBA3 = new ClassTimetable({
        class: "BBA-III",
        monday: [
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
        ],
        tuesday: [
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
        ],
        wednesday: [
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
        ],
        thursday: [
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
        ],
        friday: [
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
        ],
        saturday: [
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
          "UBBA-601",
        ],
        before: ["Class", "Class", "Class", "Class", "Class", "Class"],
      });
      BBA3.save();
    }
  });
  ClassTimetable.find({ class: "BSc-I" }, (err, classFound) => {
    if (classFound.length === 0) {
      const BSC1 = new ClassTimetable({
        class: "BSc-I",
        monday: [
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
        ],
        tuesday: [
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
        ],
        wednesday: [
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
        ],
        thursday: [
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
        ],
        friday: [
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
        ],
        saturday: [
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
          "UCSH-201",
        ],
        before: ["Class", "Class", "Class", "Class", "Class", "Class"],
      });
      BSC1.save();
    }
  });
  ClassTimetable.find({ class: "BSc-II" }, (err, classFound) => {
    if (classFound.length === 0) {
      const BSC2 = new ClassTimetable({
        class: "BSc-II",
        monday: [
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
        ],
        tuesday: [
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
        ],
        wednesday: [
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
        ],
        thursday: [
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
        ],
        friday: [
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
        ],
        saturday: [
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
          "UCSH-401",
        ],
        before: ["Class", "Class", "Class", "Class", "Class", "Class"],
      });
      BSC2.save();
    }
  });
  ClassTimetable.find({ class: "BSc-III" }, (err, classFound) => {
    if (classFound.length === 0) {
      const BSC3 = new ClassTimetable({
        class: "BSc-III",
        monday: [
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
        ],
        tuesday: [
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
        ],
        wednesday: [
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
        ],
        thursday: [
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
        ],
        friday: [
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
        ],
        saturday: [
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
          "UCSH-601",
        ],
        before: ["Class", "Class", "Class", "Class", "Class", "Class"],
      });
      BSC3.save();
    }
  });

  return ClassTimetable;
};
