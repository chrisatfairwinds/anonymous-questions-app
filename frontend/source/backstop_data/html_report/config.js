report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Homepage_0_document_0_phone.png",
        "test": "../bitmaps_test/20230220-213403/backstop_default_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Homepage_0_document_0_phone.png",
        "label": "Homepage",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Homepage_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230220-213403/backstop_default_Homepage_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Homepage_0_document_1_tablet.png",
        "label": "Homepage",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Add_Question_0_document_0_phone.png",
        "test": "../bitmaps_test/20230220-213403/backstop_default_Add_Question_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Add_Question_0_document_0_phone.png",
        "label": "Add Question",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/add-question",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Add_Question_0_document_1_tablet.png",
        "test": "../bitmaps_test/20230220-213403/backstop_default_Add_Question_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Add_Question_0_document_1_tablet.png",
        "label": "Add Question",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/add-question",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.8874257405598959,
          "misMatchPercentage": "0.89",
          "analysisTime": 41
        },
        "diffImage": "../bitmaps_test/20230220-213403/failed_diff_backstop_default_Add_Question_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});