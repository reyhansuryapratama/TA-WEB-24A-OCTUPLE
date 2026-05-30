"use client";

import React, {
  useState,
  ChangeEvent,
  FormEvent,
} from "react";

import type { BookingFormData } from "@/types";

import { paketList } from "@/lib/data/paket";

import {
  formatCurrency,
  isValidEmail,
  isValidPhone,
} from "@/lib/utils";

import Button from "@/components/ui/Button";

// ============================================================
// INITIAL FORM
// ============================================================

const initialForm: BookingFormData = {
  nama: "",
  email: "",
  telepon: "",
  tanggal: "",
  paketId: "",
  jumlahPeserta: 2,
  catatan: "",
};

type SubmitState =
  | "idle"
  | "loading"
  | "success"
  | "error";

export default function BookingForm() {
  // ==========================================================
  // STATE
  // ==========================================================

  const [form, setForm] =
    useState<BookingFormData>(
      initialForm
    );

  const [state, setState] =
    useState<SubmitState>(
      "idle"
    );

  const [errors, setErrors] =
    useState<
      Partial<
        Record<
          keyof BookingFormData,
          string
        >
      >
    >({});

  // ==========================================================
  // MIN DATE
  // ==========================================================

  const tomorrow = new Date();

  tomorrow.setDate(
    tomorrow.getDate() + 1
  );

  const minDate = tomorrow
    .toLocaleDateString("en-CA");

  // ==========================================================
  // SELECTED PACKAGE
  // ==========================================================

  const selectedPaket =
    paketList.find(
      (p) =>
        p.id === form.paketId
    );

  // ==========================================================
  // TOTAL PRICE
  // ==========================================================

  const totalHarga =
    selectedPaket
      ? selectedPaket.harga *
        form.jumlahPeserta
      : 0;

  // ==========================================================
  // HANDLE CHANGE
  // ==========================================================

  const handleChange = (
    e: ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    >
  ) => {
    const { name, value } =
      e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "jumlahPeserta"
          ? Number(value)
          : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ==========================================================
  // VALIDATION
  // ==========================================================

  const validate = (): boolean => {
    const newErrors: Partial<
      Record<
        keyof BookingFormData,
        string
      >
    > = {};

    if (!form.nama.trim()) {
      newErrors.nama =
        "Nama wajib diisi";
    }

    if (!form.email.trim()) {
      newErrors.email =
        "Email wajib diisi";
    } else if (
      !isValidEmail(form.email)
    ) {
      newErrors.email =
        "Format email tidak valid";
    }

    if (!form.telepon.trim()) {
      newErrors.telepon =
        "Nomor telepon wajib diisi";
    } else if (
      !isValidPhone(form.telepon)
    ) {
      newErrors.telepon =
        "Nomor telepon tidak valid";
    }

    if (!form.tanggal) {
      newErrors.tanggal =
        "Tanggal wajib dipilih";
    }

    if (!form.paketId) {
      newErrors.paketId =
        "Pilih paket wisata";
    }

    if (form.jumlahPeserta < 1) {
      newErrors.jumlahPeserta =
        "Minimal 1 peserta";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors)
        .length === 0
    );
  };

  // ==========================================================
  // SUBMIT
  // ==========================================================

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validate()) return;

    setState("loading");

    try {
      const pesan = `
Halo Admin Pahawang 🌊

Nama: ${form.nama}
Email: ${form.email}
Telepon: ${form.telepon}

Paket:
${selectedPaket?.nama ?? "-"}

Tanggal:
${form.tanggal}

Jumlah Peserta:
${form.jumlahPeserta}

Catatan:
${form.catatan || "-"}

Total:
${formatCurrency(totalHarga)}

Terima kasih 🙏
      `;

      // GANTI DENGAN NOMOR ADMIN
      const nomorAdmin =
        "6281234567890";

      const waUrl = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(
        pesan
      )}`;

      window.open(
        waUrl,
        "_blank"
      );

      setState("success");
    } catch (error) {
      console.error(error);

      setState("error");
    }
  };

  // ==========================================================
  // SUCCESS STATE
  // ==========================================================

  if (state === "success") {
    return (
      <div className="py-10 text-center">
        <div className="mb-4 text-5xl">
          🎉
        </div>

        <h2 className="mb-2 text-2xl font-bold text-[var(--ocean-deep)]">
          Booking Berhasil
        </h2>

        <p className="mb-6 text-[var(--text-secondary)]">
          WhatsApp berhasil dibuka.
          Tim kami akan segera
          menghubungi Anda.
        </p>

        <Button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setState("idle");
          }}
        >
          Booking Lagi
        </Button>
      </div>
    );
  }

  // ==========================================================
  // FORM
  // ==========================================================

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Nama */}
      <div>
        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Nama Lengkap"
          className="input-field w-full"
        />

        {errors.nama && (
          <p className="mt-1 text-sm text-red-500">
            {errors.nama}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="input-field w-full"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* Telepon */}
      <div>
        <input
          type="tel"
          name="telepon"
          value={form.telepon}
          onChange={handleChange}
          placeholder="08xxxxxxxxxx"
          className="input-field w-full"
        />

        {errors.telepon && (
          <p className="mt-1 text-sm text-red-500">
            {errors.telepon}
          </p>
        )}
      </div>

      {/* Paket */}
      <div>
        <select
          name="paketId"
          value={form.paketId}
          onChange={handleChange}
          className="input-field w-full"
        >
          <option value="">
            Pilih Paket Wisata
          </option>

          {paketList.map((p) => (
            <option
              key={p.id}
              value={p.id}
            >
              {p.nama} —{" "}
              {formatCurrency(
                p.harga
              )}
            </option>
          ))}
        </select>

        {errors.paketId && (
          <p className="mt-1 text-sm text-red-500">
            {errors.paketId}
          </p>
        )}
      </div>

      {/* Tanggal */}
      <div>
        <input
          type="date"
          name="tanggal"
          value={form.tanggal}
          onChange={handleChange}
          min={minDate}
          className="input-field w-full"
        />

        {errors.tanggal && (
          <p className="mt-1 text-sm text-red-500">
            {errors.tanggal}
          </p>
        )}
      </div>

      {/* Jumlah Peserta */}
      <div>
        <input
          type="number"
          name="jumlahPeserta"
          value={
            form.jumlahPeserta
          }
          onChange={handleChange}
          min={
            selectedPaket?.minPeserta ??
            1
          }
          max={
            selectedPaket?.maxPeserta ??
            50
          }
          className="input-field w-full"
        />

        {errors.jumlahPeserta && (
          <p className="mt-1 text-sm text-red-500">
            {errors.jumlahPeserta}
          </p>
        )}
      </div>

      {/* Catatan */}
      <div>
        <textarea
          name="catatan"
          value={form.catatan}
          onChange={handleChange}
          placeholder="Catatan tambahan..."
          rows={4}
          className="input-field w-full resize-none"
        />
      </div>

      {/* Total */}
      {selectedPaket && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--sand)]/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-[var(--text-secondary)]">
              Total Harga
            </span>

            <strong className="text-lg text-[var(--ocean-deep)]">
              {formatCurrency(
                totalHarga
              )}
            </strong>
          </div>
        </div>
      )}

      {/* Error */}
      {state === "error" && (
        <div className="text-sm text-red-500">
          Gagal mengirim booking.
          Silakan coba lagi.
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        loading={
          state === "loading"
        }
        fullWidth
      >
        {state === "loading"
          ? "Mengirim..."
          : "Kirim Booking"}
      </Button>
    </form>
  );
}