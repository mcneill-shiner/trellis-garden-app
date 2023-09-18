const plants = [
  {
    id: 1001,
    name: "carrot",
    isTemplate: true,
    recMethod: "sowDirectly",
    userMethod: "sowDirectly",
    properties: {
      sunlight: {
        min: 6,
        max: 10,
        unitMeasure: "hours",
      },
      spacing: {
        min: 24,
        max: 30,
        rowMin: 36,
        unit: "inches",
      },
      depth: {
        min: 8,
        max: 12,
        unit: "inches",
      },
      soil: ["sandy loam", "loam"],
      pH: {
        min: 5.8,
        max: 6.5,
      },
      fertilizer: "5-10-5",
      support: ["stake", "cage"],
    },
    events: {
      sowDirectly: {
        isTask: true,
        min: 2,
        max: 3,
        unit: "weeks",
        modifier: "before",
        anchor: "last frost",
      },
      germinate: {
        isTask: false,
        min: 7,
        max: 14,
        unit: "days",
        modifier: "after",
        anchor: "startSeedsIndoors",
      },
      harvest: {
        isTask: true,
        min: 65,
        max: 85,
        unit: "days",
        modifier: "after",
        anchor: "transplant",
      },
      succession: {
        min: 3,
        max: 4,
        unit: "weeks",
        end: {
          min: 10,
          max: 12,
          unit: "weeks",
          modifier: "before",
          anchor: "last frost",
        },
      },
    },
  },
  {
    id: 1000,
    name: "eggplant",
    isTemplate: true,
    recMethod: "transplant",
    userMethod: "startSeedsIndoors",
    properties: {
      sunlight: {
        min: 6,
        max: 8,
        unitMeasure: "hours",
      },
      spacing: {
        min: 24,
        max: 30,
        rowMin: 36,
        unit: "inches",
      },
      soil: ["sandy loam", "loam"],
      pH: {
        min: 5.8,
        max: 6.5,
      },
      fertilizer: "5-10-5",
      support: ["stake", "cage"],
    },
    events: {
      startSeedsIndoors: {
        isTask: true,
        min: 8,
        max: 12,
        unit: "weeks",
        modifier: "before",
        anchor: "last frost",
      },
      transplant: {
        isTask: true,
        method: {
          airTemp: {
            recMethod: true,
            dayTemp: {
              min: 70,
              max: 75,
              unit: "degrees F",
            },
            nightTemp: {
              min: 60,
              max: 65,
              unit: "degrees F",
            },
          },
        },
      },
      germinate: {
        isTask: false,
        min: 7,
        max: 14,
        unit: "days",
        modifier: "after",
        anchor: "startSeedsIndoors",
      },
      harvest: {
        isTask: true,
        min: 65,
        max: 85,
        unit: "days",
        modifier: "after",
        anchor: "transplant",
      },
    },
  },
];

// export default plants;
module.exports = plants;
