slotGroups = {
    "A1": ["mon_p1", "wed_p2"],
    "A2": ["mon_p7", "wed_p8"],


    "B1": ["tue_p1", "thu_p2"],
    "B2": ["tue_p7", "thu_p8"],

    "C1": ["wed_p1", "fri_p2"],
    "C2": ["wed_p7", "fri_p8"],

    "D1": ["thu_p1", "mon_p3"],
    "D2": ["thu_p7", "mon_p9"],

    "E1": ["fri_p1", "tue_p3"],
    "E2": ["fri_p7", "tue_p9"],

    "F1": ["mon_p2", "wed_p3"],
    "F2": ["mon_p8", "wed_p9"],

    "G1": ["tue_p2", "thu_p3"],
    "G2": ["tue_p8", "thu_p9"],

    "TA1": ["fri_p3"],
    "TA2": ["fri_p9"],

    "TB1": ["mon_p4"],
    "TB2": ["mon_p10"],

    "TC1": ["tue_p4"],
    "TC2": ["tue_p10"],

    "TD1": ["wed_p4"],
    "TD2": ["wed_p10"],

    "TE1": ["thu_p4"],
    "TE2": ["thu_p10"],

    "TF1": ["fri_p4"],
    "TF2": ["fri_p10"],

    "TG1": ["mon_p5"],
    "TG2": ["mon_p11"],

    "TAA1": ["tue_p5"],
    "TAA2": ["tue_p11"],

    "TCC1": ["thu_p5"],
    "TCC2": ["thu_p11"],

    "TDD1": ["fri_p5"],
    "TDD2": ["fri_p11"],



    "L1": ["mon_p1"],
    "L2": ["mon_p2"],
    "L3": ["mon_p3"],
    "L4": ["mon_p4"],
    "L5": ["mon_p5"],
    "L6": ["mon_p6"],
    "L7": ["tue_p1"],
    "L8": ["tue_p2"],
    "L9": ["tue_p3"],
    "L10": ["tue_p4"],
    "L11": ["tue_p5"],
    "L12": ["tue_p6"],
    "L13": ["wed_p1"],
    "L14": ["wed_p2"],
    "L15": ["wed_p3"],
    "L16": ["wed_p4"],
    "L19": ["thu_p1"],
    "L20": ["thu_p2"],
    "L21": ["thu_p3"],
    "L22": ["thu_p4"],
    "L23": ["thu_p5"],
    "L24": ["thu_p6"],
    "L25": ["fri_p1"],
    "L26": ["fri_p2"],
    "L27": ["fri_p3"],
    "L28": ["fri_p4"],
    "L29": ["fri_p5"],
    "L30": ["fri_p6"],

    "L31": ["mon_p7"],
    "L32": ["mon_p8"],
    "L33": ["mon_p9"],
    "L34": ["mon_p10"],
    "L35": ["mon_p11"],
    "L36": ["mon_p12"],
    "L37": ["tue_p7"],
    "L38": ["tue_p8"],
    "L39": ["tue_p9"],
    "L40": ["tue_p10"],
    "L41": ["tue_p11"],
    "L42": ["tue_p12"],
    "L43": ["wed_p7"],
    "L44": ["wed_p8"],
    "L45": ["wed_p9"],
    "L46": ["wed_p10"],
    "L47": ["wed_p11"],
    "L48": ["wed_p12"],
    

}


const cellToSlotGroups = buildReverseMap(slotGroups);

function buildReverseMap(slotGroups) {
  const map = {};
  for (const group in slotGroups) {
    for (const cell of slotGroups[group]) {
      if (!map[cell]) map[cell] = [];
      map[cell].push(group);
    }
  }
  return map;
}


console.log(cellToSlotGroups);



