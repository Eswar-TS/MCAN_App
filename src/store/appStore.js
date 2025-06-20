import { create } from "zustand";

const useAppStore = create((set) => ({
	applicants: [],
	selectedApplicant: null,
	uploadedFile: null,
	setApplicants: (applicants) => set({ applicants }),
	addApplicant: (applicant) =>
		set((state) => ({ applicants: [...state.applicants, applicant] })),
	setSelectedApplicant: (applicant) => set({ selectedApplicant: applicant }),
	setUploadedFile: (file) => set({ uploadedFile: file }),
}));

export default useAppStore;
