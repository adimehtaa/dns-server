
/**
 * DNS Record Types as defined in RFC 1035, RFC 3596, and others.
 * These are the QTYPE values that appear in DNS packets.
 */

export const RECORD_TYPES = {
  A:     1,   // IPv4 address (RFC 1035)
  NS:    2,   // Authoritative name server (RFC 1035)
  CNAME: 5,   // Canonical name alias (RFC 1035)
  SOA:   6,   // Start of authority (RFC 1035)
  PTR:   12,  // Pointer for reverse DNS (RFC 1035)
  MX:    15,  // Mail exchange (RFC 1035)
  TXT:   16,  // Text strings (RFC 1035)
  AAAA:  28,  // IPv6 address (RFC 3596)
  SRV:   33,  // Service locator (RFC 2782)
  OPT:   41,  // EDNS0 pseudo-record (RFC 6891)
  ANY:   255, // Any record type (RFC 1035)
} as const;

// Reverse map: number → string name (used when logging responses)
export const RECORD_TYPE_NAMES : Record<number, string> = Object.fromEntries(
    Object.entries(RECORD_TYPES).map(([name, value]) => [value, name])
); 

/**
 * DNS Response Codes (RCODE) — the "status codes" of DNS.
 * These appear in the flags section of every DNS response.
 */
export const RCODES = {
  NOERROR:  0, // Success
  FORMERR:  1, // Query format error
  SERVFAIL: 2, // Server failed to complete the request
  NXDOMAIN: 3, // Domain does not exist
  NOTIMP:   4, // Query type not implemented
  REFUSED:  5, // Server refused the query (policy)
} as const;

export const RCODE_NAMES : Record<number, string> = Object.fromEntries(
    Object.entries(RCODES).map(([name, value]) => [value, name])
);

/**
 * DNS Classes — almost always IN (Internet).
 * The others are historical and rarely seen in practice.
 */
export const DNS_CLASSES = {
  IN: 1, // Internet
  CS: 2, // CSNET (obsolete)
  CH: 3, // Chaos (used for version queries: dig chaos txt version.bind)
  HS: 4, // Hesiod
} as const;


// DNS standard port
export const DNS_PORT = 53;

// Maximum UDP DNS packet size (RFC 1035 §2.3.4)
// EDNS0 can extend this, but 512 is the baseline
export const MAX_UDP_SIZE      = 512;
export const MAX_EDNS_UDP_SIZE = 4096;

// DNS query timeout when querying upstream servers
export const UPSTREAM_TIMEOUT_MS = 5_000;

// Maximum recursion depth to prevent infinite loops
export const MAX_RECURSION_DEPTH = 10;

// ICANN Root Server IP addresses (IPv4)
// These never change without significant IANA process
export const ROOT_SERVERS: readonly string[] = [
  '198.41.0.4',     // a.root-servers.net
  '199.9.14.201',   // b.root-servers.net
  '192.33.4.12',    // c.root-servers.net
  '199.7.91.13',    // d.root-servers.net
  '192.203.230.10', // e.root-servers.net
  '192.5.5.241',    // f.root-servers.net
  '192.112.36.4',   // g.root-servers.net
  '198.97.190.53',  // h.root-servers.net
  '192.36.148.17',  // i.root-servers.net
  '192.58.128.30',  // j.root-servers.net
  '193.0.14.129',   // k.root-servers.net
  '199.7.83.42',    // l.root-servers.net
  '202.12.27.33',   // m.root-servers.net
] as const;