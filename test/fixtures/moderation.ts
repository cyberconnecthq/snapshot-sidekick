// Mock return results from SQL
export const SqlFixtures: Record<string, any[]> = {
  flaggedLinks: [
    { action: 'flag', type: 'link', value: 'https://gogle.com', created: 100 },
    { action: 'flag', type: 'link', value: 'https://facebook.com', created: 100 }
  ],
  flaggedProposals: [
    { action: 'flag', type: 'proposal', value: '0x1', created: 100 },
    { action: 'flag', type: 'proposal', value: '0x2', created: 100 }
  ],
  flaggedSpaces: [
    { action: 'flag', type: 'space', value: 'space3.eth', created: 100 },
    { action: 'flag', type: 'space', value: 'space4.eth', created: 100 }
  ],
  flaggedIps: [
    {
      action: 'flag',
      type: 'ip',
      value: '12ca17b49af2289436f303e0166030a21e525d266e209267433801a8fd4071a0',
      created: 100
    },
    {
      action: 'flag',
      type: 'ip',
      value: '19e36255972107d42b8cecb77ef5622e842e8a50778a6ed8dd1ce94732daca9e',
      created: 100
    }
  ],
  verifiedSpaces: [
    { action: 'verify', type: 'space', value: 'space1.eth', created: 100 },
    { action: 'verify', type: 'space', value: 'space2.eth', created: 100 }
  ]
};
