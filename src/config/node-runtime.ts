/** Supported release lines with the October 2026 Node.js security fixes. */
export function isSupportedNodeVersion(version: string): boolean {
  if (!/^\d+\.\d+\.\d+$/.test(version)) return false;
  const [major, minor, patch] = version.split(".").map(Number) as [number, number, number];
  if (major === 24) return minor > 22 || (minor === 22 && patch >= 1);
  if (major === 26) return minor > 12 || (minor === 12 && patch >= 1);
  return major > 26;
}
