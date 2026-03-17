import SpecialtiesBanner from "@/components/network/specialtiesBanner";
import MapAndCentersGrid from "@/components/network/mapAndCentersGrid";
import ContactSection from "@/components/network/contactSection";
import branches from "@/assets/data/collectionCenters";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BranchPage({ params }) {
  const { id } = params;
  const branchIndex = parseInt(id);
  const branch = branches[branchIndex];

  if (!branch) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/network"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Network
        </Link>

        <div className="text-center mb-8 lg:mb-10 px-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
            {branch.name.replace(" (Main Branch)", "")}
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-blue-800 max-w-[90%] sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Welcome to our{" "}
            <span className="font-semibold">
              {branch.name.replace(" (Main Branch)", "")}
            </span>
            . We are committed to delivering exceptional diagnostic services
            with state-of-the-art equipment and experienced medical
            professionals.
          </p>
        </div>

        <SpecialtiesBanner branch={branch} />

        <MapAndCentersGrid branch={branch} />

        <ContactSection branch={branch} />
      </div>
    </div>
  );
}
