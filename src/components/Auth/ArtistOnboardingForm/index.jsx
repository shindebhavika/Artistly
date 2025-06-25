"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import MultiSelectDropdown from "@/components/Common/MultiSelectDropdown";

const categoriesList = ["Singer", "DJ", "Anchor", "Comedian"];
const languagesList = ["Hindi", "English", "Marathi", "Punjabi"];
const feeRanges = ["₹50K–₹1L", "₹1L–₹5L", "₹5L+", "Other"];

export default function ArtistOnboardingForm() {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const selectedFee = watch("feeRange");

  const onSubmit = (data) => {
    data.category = selectedCategories;
    data.languages = selectedLanguages;

    if (selectedFee === "Other") {
      data.feeRange = data.otherFeeRange || "Not specified";
    }

    console.log("Submitted Artist:", data);
  };

  return (
    <div className="max-w-3xl mx-auto p-8  bg-black rounded-2xl shadow-xl mt-10">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">🎤 Artist Onboarding Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Enter artist name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            {...register("bio", { required: "Bio is required" })}
            rows={3}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Short artist bio"
          />
          {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
        </div>

        {/* Category - Multiselect */}
        <MultiSelectDropdown
          label="Category"
          options={categoriesList}
          selected={selectedCategories}
          setSelected={(selected) => {
            setSelectedCategories(selected);
            setValue("category", selected, { shouldValidate: true });
          }}
          placeholder="Select categories"
        />
        {selectedCategories.length === 0 && errors.category && (
          <p className="text-red-500 text-sm mt-1">Please select at least one category</p>
        )}
        <input
          type="hidden"
          {...register("category", {
            validate: () => selectedCategories.length > 0 || "Select at least one category",
          })}
        />

        {/* Languages - Multiselect */}
        <MultiSelectDropdown
          label="Languages Spoken"
          options={languagesList}
          selected={selectedLanguages}
          setSelected={(selected) => {
            setSelectedLanguages(selected);
            setValue("languages", selected, { shouldValidate: true });
          }}
          placeholder="Select languages"
        />
        {selectedLanguages.length === 0 && errors.languages && (
          <p className="text-red-500 text-sm mt-1">Please select at least one language</p>
        )}
        <input
          type="hidden"
          {...register("languages", {
            validate: () => selectedLanguages.length > 0 || "Select at least one language",
          })}
        />

        {/* Fee Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Fee Range</label>
          <select
            {...register("feeRange", { required: "Fee range is required" })}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select</option>
            {feeRanges.map((fee) => (
              <option key={fee} value={fee}>{fee}</option>
            ))}
          </select>
          {errors.feeRange && <p className="text-red-500 text-sm mt-1">{errors.feeRange.message}</p>}

          {selectedFee === "Other" && (
            <input
              {...register("otherFeeRange", { required: "Please enter a custom fee" })}
              className="mt-3 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your custom fee"
            />
          )}
          {errors.otherFeeRange && selectedFee === "Other" && (
            <p className="text-red-500 text-sm mt-1">{errors.otherFeeRange.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            {...register("location", { required: "Location is required" })}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
            placeholder="Enter city"
          />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
        </div>

        {/* Profile Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            {...register("profileImage")}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) setImagePreview(URL.createObjectURL(file));
            }}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-32 h-32 mt-2 object-cover rounded-md"
            />
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4 text-center">
          <button
            type="submit"
            className="bg-purple-600  px-6 py-2 rounded-lg hover:bg-purple-700 transition shadow-lg"
          >
            Submit Artist
          </button>
        </div>
      </form>
    </div>
  );
}
