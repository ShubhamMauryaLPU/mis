const mongoose = require("mongoose");

const incomeTaxSchema = new mongoose.Schema({
  incomeDetails: {
    salary: {
      employerName: String,
      employerTAN: String,
      basic: Number,
      allowances: Number,
      perquisites: Number,
      pension: Number,
    },
    businessIncome: Number,
    capitalGains: Number,
    housePropertyIncome: Number,
    otherIncome: Number,
  },
  deductions: {
    section80C: {
      lifeInsurance: Number,
      epf: Number,
      ppf: Number,
      elss: Number,
      nsc: Number,
      taxSavingFD: Number,
      ulip: Number,
      sukanyaSamriddhi: Number,
      scss: Number,
      tuitionFees: Number,
      homeLoanPrincipal: Number,
      stampDutyRegistration: Number,
      total: Number, // should not exceed 150000
    },
    section80D: {
      medicalInsurance: Number,
      parentsInsurance: Number,
    },
    section80E: {
      educationLoanInterest: Number,
    },
    section80G: {
      donations: Number,
    },
    section80CCD1B: {
      npsContribution: Number,
    },
    housingLoanInterest: Number,
  },
  taxDetails: {
    tdsSalary: Number,
    tdsOther: Number,
    advanceTax: Number,
    selfAssessmentTax: Number,
    relief89: Number,
  },
  bankDetails: [
    {
      accountNumber: String,
      ifsc: String,
      bankName: String,
      branch: String,
      isRefundAccount: { type: Boolean, default: false },
    },
  ],
  filingStatus: {
    assessmentYear: String,
    itrForm: {
      type: String,
      enum: ["ITR-1", "ITR-2", "ITR-3", "ITR-4", "Other"],
    },
    filedOn: Date,
    status: {
      type: String,
      enum: ["Pending", "Challan", "Filed", "For apporval","NTU","Query","WIP"],
      default: "pending",
    },
  },
  remark:[
    {
        type:mongoose.Schema.ObjectId,
        ref:"Remark"
    }
  ]
});

module.exports = mongoose.model("IncomeTaxFiling", incomeTaxSchema);
