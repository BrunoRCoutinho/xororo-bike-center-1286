import { useQuery } from "@tanstack/react-query";
import { orpc } from "../lib/api";

export function useCatalog() { return useQuery(orpc.catalog.list.queryOptions()); }
export function useProduct(slug: string) { return useQuery(orpc.catalog.get.queryOptions({ input: { slug } })); }
