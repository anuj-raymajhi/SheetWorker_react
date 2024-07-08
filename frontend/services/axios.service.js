import axios from "axios";
import { successToast, errorToast } from "./toastify.service.js";

const baseURL = "http://localhost:8000/api";

const createPostFunction = (endpoint) => {
  return async (data) => {
    try {
      const response = await axios.post(`${baseURL}/${endpoint}`, data);
      console.log(response);
      successToast(response.data.message)
      return response.data;
    } catch (err) {
      console.error(err);
      errorToast(response.data.error)
      return { success: false, error: err?.message ?? 'Unknown error' };
    }
  };
};

// Create specific post functions
export const postBSheet = createPostFunction('yearsEntryBSheet');
export const postCashFlow = createPostFunction('yearsEntryCashFlow');
export const postPLSheet = createPostFunction('yearsEntry');
export const postRiskGrading = createPostFunction('yearsEntryRiskGrading');
export const postSummaryCashFlow = createPostFunction('yearsEntrySummaryCashFlow');
export const postKeyFinancial = createPostFunction('yearsEntryKFA');
export const postKeyRatios= createPostFunction('yearsEntryKeyRatios');



