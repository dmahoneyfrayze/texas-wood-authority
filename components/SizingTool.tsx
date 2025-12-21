"use client";

import { useState, useMemo } from "react";
import { Users, Ruler, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

export function SizingTool() {
    const [guests, setGuests] = useState(6);
    const [roomWidth, setRoomWidth] = useState(12); // In feet
    const [roomLength, setRoomLength] = useState(15); // In feet

    const recommendation = useMemo(() => {
        // Basic logic: 24 inches per person
        // Length for [guests] people assuming rectangular table with people on sides and ends
        // For 6 people: 2 on each side, 1 on each end = 6
        // Standard: 6ft for 6 people comfortably. 8ft for 8. 10ft for 10.

        let length_ft = 6;
        let width_in = 36;

        if (guests <= 4) {
            length_ft = 5;
            width_in = 36;
        } else if (guests <= 6) {
            length_ft = 6;
            width_in = 40;
        } else if (guests <= 8) {
            length_ft = 8;
            width_in = 42;
        } else if (guests <= 10) {
            length_ft = 10;
            width_in = 44;
        } else {
            length_ft = 12;
            width_in = 48;
        }

        const tableAreaSqFt = (length_ft * (width_in / 12));
        const roomAreaSqFt = roomWidth * roomLength;
        const clearance_ft = 3; // Minimum clearance around table

        const requiredWidth = (width_in / 12) + (clearance_ft * 2);
        const requiredLength = length_ft + (clearance_ft * 2);

        const fits = roomWidth >= requiredWidth && roomLength >= requiredLength;

        return {
            length_ft,
            width_in,
            fits,
            requiredWidth,
            requiredLength
        };
    }, [guests, roomWidth, roomLength]);

    return (
        <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
            <div className="p-8 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-outfit)] mb-2">Live Edge Sizing Calculator</h2>
                <p className="text-stone-500 text-sm">Find the perfect slab dimensions for your space and guest count.</p>
            </div>

            <div className="p-8 grid md:grid-cols-2 gap-12">
                {/* Inputs */}
                <div className="space-y-8">
                    <div>
                        <label className="flex items-center text-sm font-bold uppercase tracking-wider text-stone-400 mb-4">
                            <Users className="h-4 w-4 mr-2" />
                            Number of Guests
                        </label>
                        <input
                            type="range"
                            min="2"
                            max="14"
                            step="2"
                            value={guests}
                            onChange={(e) => setGuests(parseInt(e.target.value))}
                            className="w-full h-2 bg-stone-200 dark:bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-700"
                        />
                        <div className="flex justify-between mt-2 text-xl font-bold text-stone-900 dark:text-stone-100">
                            <span>{guests} People</span>
                        </div>
                    </div>

                    <div>
                        <label className="flex items-center text-sm font-bold uppercase tracking-wider text-stone-400 mb-4">
                            <Home className="h-4 w-4 mr-2" />
                            Room Dimensions (Feet)
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-xs text-stone-500 mb-1 block">Width</span>
                                <input
                                    type="number"
                                    value={roomWidth}
                                    onChange={(e) => setRoomWidth(parseInt(e.target.value) || 0)}
                                    className="w-full bg-stone-100 dark:bg-stone-800 border-none rounded-lg p-3 focus:ring-2 focus:ring-amber-700"
                                />
                            </div>
                            <div>
                                <span className="text-xs text-stone-500 mb-1 block">Length</span>
                                <input
                                    type="number"
                                    value={roomLength}
                                    onChange={(e) => setRoomLength(parseInt(e.target.value) || 0)}
                                    className="w-full bg-stone-100 dark:bg-stone-800 border-none rounded-lg p-3 focus:ring-2 focus:ring-amber-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="bg-stone-900 text-white rounded-xl p-8 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Ruler className="h-24 w-24 rotate-12" />
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Recommended Slab</h3>
                        <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-outfit)] mb-2">
                            {recommendation.length_ft}' <span className="text-stone-500">x</span> {recommendation.width_in}"
                        </div>
                        <p className="text-stone-400 text-sm mb-8 leading-relaxed">
                            Standard seating for {guests} guests requires approx. {recommendation.length_ft} feet of length. We recommend a width of at least {recommendation.width_in} inches for comfortable center-of-table serving.
                        </p>

                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8 ${recommendation.fits ? 'bg-emerald-900/50 text-emerald-400 border border-emerald-500/30' : 'bg-red-900/50 text-red-400 border border-red-500/30'}`}>
                            {recommendation.fits ? '✓ Fits your room' : '⚠ Tight squeeze for this room'}
                        </div>

                        {!recommendation.fits && (
                            <p className="text-xs text-stone-500 mt-2">
                                Ideal room size for this table is {recommendation.requiredWidth.toFixed(1)}' x {recommendation.requiredLength.toFixed(1)}' to allow 3ft of clearance for chairs.
                            </p>
                        )}

                        <Link
                            href={`https://shopkovara.com/collections/parota-live-edge-slabs?filter.p.m.custom.length=${recommendation.length_ft}`}
                            target="_blank"
                            className="mt-8 flex items-center justify-between w-full bg-amber-700 hover:bg-amber-600 text-white p-4 rounded-lg transition-colors group"
                        >
                            <span className="font-bold">Browse {recommendation.length_ft}ft Slabs</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
