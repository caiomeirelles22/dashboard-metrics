import { NextResponse } from "next/server";
import { getDashboardData } from "@/services/dashboardService";

export async function GET() {
  try {
    const data = await getDashboardData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar os dados do dashboard", details: error },
      { status: 500 },
    );
  }
}
