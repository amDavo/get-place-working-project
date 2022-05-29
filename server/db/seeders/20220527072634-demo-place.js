'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Places', [
      {
        place_name: 'taganka',
        location: 'street 21',
        img: 'data:image/jpeg;base64,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',
        category: 'cafe',
        free: true,
        working_hours: '9-22',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        place_name: 'aaaaaaaa',
        location: 'street 1488',
        img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBgVFRUYGRgaGhsfHBsbHB0hHRsbJB0dGh0bIR0hIS0kHR0qIxshJTclKy4xNDQ0HyM6PzozPi0zNTEBCwsLEA8QHRISHzMqIyozMzMzMzMzMzMzMzMzMzMxMzMzMzMzMz4zPDM/MzMzMzMzMzMzMz4zMzMzMzMxMzMzM//AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABFEAACAQIEAwQHBAgFBAEFAAABAhEAAwQSITEFQVEiYXGBEzKRobHR8AZCUsEUIzNicoKy4ZKiwtLxFRYkU0M0Y3ODs//EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIBEAAgICAgMBAQAAAAAAAAAAAAECESExAxITQVEiYf/aAAwDAQACEQMRAD8AXWOLgNkuKbbDeZjz5jz076Zo4bUEHzrriXDC2jKHXl1HgfWHkSO6ki4FrZmzcI627m09zerPjlNcrimjpUyx2beal2F4Rct5zczQ3aEzqZAmesCPLupnwS+WIS4hR9ND7JFWfiGHXJMbfX51moOnRo55VlCYsh12ovDODzqfG2Jpb6MoZFKMipRsc2RRL8GFyLkGUiNN4Obr30Dgr3WrTw7EJ6OCwBE1oqlhmcrjlEGGwSmz3kT3Ax08zVU4nhtMyyII2MFTuNfLQ1Y34myhk0OpAJ6RPnpSHE3Ce2OehnyJU+Oh9h3FRKsUVC82LsSi3ULDQ7OByP4h3Hu29lBIrXEZGU5rYADTPpLfI9cy7HujpWcSle3bLBSQDBIPehI7t+oIqc3NA9s7zHPKRoQRz32O4PQmLQPZFgrIa01uWLLLDMZO3aA7oE+R60PgLAGa3LEXF0kz+sWSvtGZf5xU9slMlxWB6nbtKdRHIzrHQiuccACLiGFMMpH3WBmP5SPcKomgThdgJdAliHVk1M6n1f8AOFqGzhxbvI+ZtHVtW6MCR4aUVxFgGFxNAYde4nWP5WBXyrnjLLmzDRW7S/wuMw+NWiWhdxLBqtxlJfQsPWOkE7dK1xTDA37ol9blzZv32onjlwG4WkdrteTAOPjWXSGxjCd7xHtuEU0SwfjlsNibnabRsuh/CAn+mt8eQA2rUn9XbWddczdpp79qjtfrcUAPv3CfIsWPumoBf/SMbv2XuMZ/+2oJH+VR7KZLC+KqLdmzh5IJHpLmuushQevPzAreMHocMtkEh7sO55hPur5n4NQGGvfpWMe45i2JY8gLawBp4R7a7wV/9JxFy/cJW2gzEdFGipHUx7Z606Cxkv8A4uG3Iu3RAPNU5nuJ5f2rMMgwlkXDBuuItqeX7xHTX4DnQeBvfpFx8Ve0todF7gOyg+uZqaxdFwtjMQITZEG7b5UX8z4nrSGTYO0LCfpF7tu05FO7t+I93U/2rhTH6/Edt39RNs0c/wB22OvxJ1096T+kXxmZtLdoc+g7kHMxqe8xXAtM5Z7rqXMaa7clECABO06a7kzQBHcD3Wz3D006jkI5J0G/M9aLUVtUqYLQFHEVV8asF/4m/qq2RVaxgGdwds7b/wARpwJmAWVPLaDTG02ooPPOg9vlRuEXtj65VT0Y2ELbJoK0sXLk6ajfwFOHcAUmxLjNdkgTlj2CoWS6Js6fiX2it0ozjvrKfUR7+6UJiMGresJ7+fto8iuStTRYpTDPb0Q5lH3W5eHTyitYni109jbQ+se/TU/E9N6aslA4+xKNrEQQfBlP9vOpcL0Wp0V21x4Fit2EIYifuyDBE8tvDvo4MrCQQaXcEwpuJeEyDcMqwzKeckHn371Bf4ZctGbRKfumWtnz1ZPf4ipfGmUuWg/EArqpiisNim0E6RSb/rAUBb6FCdmEFG7ww0P5VrBYU+lzKcyMh1B5yNx7ajxtGnkTGq4hmbee1/oI/KoheZUbmQwUiND2gD7jWWEhgP3vyep1saEiZBnTfuOum491LQxdj0yo7D1dyO4KvvGbQ+PeKh4VZZVBYEhraBh39oyOUjXXxHM0wx9oeiuura+jJjvhhr8tqa8Pwa9nUjRgdRyYZeXRjVJ/kT2V44YrnGmUmWJkjsse0B+KCfbXFrhsZlYHM3eTB1JUchzGm/Zq3DCoUYEne5Oo2DMOnPTympbmBWR2m36joT07qLEUh+HlrOTWUJjU7HfXoCP89QYzh5a0m8pK89pzDx0Mfy1fbuDUAmW0HUfKlNsn06WngB7bvI3zK1sRqSDo5MeFUpCop/EuHM2QjNrbRdz90ZP9NStgCMWH1j0ufn+PNXoS4FfxH3fKuXwKH7ze0fKjuLqeacNwTW2e5rKWmynX12hB7MxPlSZE9FLEPJDKI3goynUgx60V6+eGr+J/avyqt8b+y929cLi4gUAABpJgDnAj1iTVLkXsThjB5wl/LmAMZhlbvXMGj2qK2t+EZAwCsVLATrlnL7Mx0q04f7FXXLxcQZHKn1tSArSO7te6jcL9hrisM11IkTlzTHSq7x+kdJfCqYFy6m2A7RJUIJAYiMxEjSANTMCetMktOwDOpyW+zbtk67DUxsOZbmdBtp6Bw3gKWyzMZY6DLACruF1mTrqeZ17ga2AQ829o+VTLkV4KjB1k8ySxcZi7ksxjWNABsqjkB9bmjbWGbv8AZVz4rgkt2nuKZKqSATp5wBTBOFWxsW9o+VS+QpQKH6Ejr7K5KN3+yr2/B7Z5t7R8q5HB7XV/aPlS8g+pR1Ruh9n9qrnELfaf+I/1V6pjeG21C5SZLAbzpB7tNY1+dVXB8KttiL5uiUS4wAPNsxOojWANu+tITWTPkjopq4W4oDMjhTsxUgbTpy+dEq+XXpV3xPDldbttdUe3K8wlwbx0ElGjqGPOqQyytaRl2RjONM5bGjvoK/kZixLa8vYOndXb6cq64cofEW1cAobqBh+6XAIPiJ50qGRSnU/4V/21lF8Tw9oXnyiFzGPD21qgrq/p72eHIDFu4yGJyzmEfwtyqN8LdXkrjuOU+w6e+obV423DMHGmUlpOpdJIOvZiT00rjDYlgigEiFY+PZuMD4SseVTaK6s7e4F9YMn8YI9+3vqLEqCjEagjceIpq15hn2YKToRyyB9xv60be2l+OwdsNKqFJmcuk9pBqBodzTEVv7KJ+3//ACH4U8uWAaH4Bwwqb4S4f2g9YAgyoblB500excXdMw6oZ9xg+yaCWVfi/C0Cs+QGBqNIYSJBBBHIHblSX7OcPKKlztgMjTqChM7xurad4PdVxx7KyOs9rKZU6MP5TrSzgqf+Ha66/wBT0paY4bIGhXXN95wo0nUh4/OmSWwco79+mtMsBgVVWa5EOOxPIgR7Z186hNhknOIO/vke6udnSmJ+M4UBVUTDghogH7sd3Og8Fh3cAi5cE/vgTIG3Z6Aab+ynaIHdA22s/wCWiuI4VLbhFAymNOg6UoyfUckroXrgVW3cDX3zgkAh5kbkTETrue/SldxXDCL1+J3zg8j0Saf8awaBUFvcjZY1YjnpqTSf9CukgqbkAnPqogQei9TFO2nQJJqyXHW4CAXMVMdrUATpB1HfSfiuFuKEuC5ekaZnfZWI1BAEdtUPl3U3xGNYgK7NC6DRNBp+7UGJuekXIxdliNk23gQu09OtUmxNI7scJvtGW/cJn1c5JIGpMAkQdvI6Vu1hC9w+ku3hMzluNvqdpA5cqgRWXZ7v+X/ZQd2wTPauwZ/D5/dopitIdWuCZpi7eJAn9tcXTxOhOm1bxWFRbMn0iBZZna9dDZROmus+VV4YZhs9wea/7aDxGGJIBa4RvrEfCn0/odh7geAsULsb6l3zR6Z+yCvZkSCzaCSY6aQKZrw1GVVIuqV0zC7cl9u0YfnVJdbgGjvHl8q1h8Di7km1mKDQtKAht41IOxFPxt+yfIkX65w22LJP63snVvS3Jj/Fm5/XJdiOFWgSS99QBJ/8i4ABsCZfTY9Kr54XxDLs8besnu1+FKbnCMW1z0cOzgSBmXb8UzFC42T5IlwPBEu2zFy+oJAyvfuZmXmQpYiI6g77VPZ4NmeBdvGQAF9PeJnUkz6QTpHLSDvyomHw98s9vMxKFs/aXKIBLSxMfdPPlWYe/dQyr3B4aUmmnVlppovOI4HDsvpb0AwGGJuydDPZLaRtvrUVzgqBM7Yy+kHUG+8RG5YtG/Q1TMReu3PWe5HQx7fHvqNVcEEFyepAJHhM0U/oWvhehwdGVWS5iDsstiLiyZPa/FEncCNN9zQ3CoS7etZ80PIYkksSsHUkk6rEk89aqzcRvD75H/67Y/01w+LdYeWznmND7vhVQi3aInJKmXbjWOVRcKHsW7eRTAANw7iBvByCddSw5GvPmXSjsbiLtxQHyqo+6sb666SOvdqY3NBoexNbRVIwm7YuxC70Jbn0hiZGc/4VJnyifKi7+5oVJFxtY0ce1GEee3nQgWyNsQx3rKiisrShn0spMAgnby+dcsoYEEKw7x3zXeT61rhDuO8j69tYlG7iAzuM0zB3MBeh0gAe/vqLHGYPUH+u3RGfX6PMULjkyqsbbHzZD4cqAAOFS1y+moGZCY59mAPDQz5cppp6FF9UFTO4Mf8AI050n4Qga5fJ/Fb5A/d221pu5AAywNfu7c+Yoodg+OGZTmAJAYH2p+R+NKsDhVXDLlzCHuCJOXS5cA0O2g5U6xohD11+K60swP8A9MB1e5//AFuUNYEtnQxjMqqToNvePyqXE4o3AWaNByoIJEeXxNEXbfYY9x9kVi47Nk1giwuLW3cBIJClx5iBQt+/mbQECdO4VHg0FwE9Rbf/ABJm/MV09ggx9cxRGH5HKf6CMPiwjI7a9rbwoxOJjtwulw+ykWPUqqfxH4Gu8M3sqaakVhxsnNsE7c67S2BOldW2OtcsDMfUU6FZzc10A8ahyROZdOtTs8/KuSfypACOkExuaHuWpielMWQAyNjt3Gobo7JmmgFt5Aoph9kkQ55btZ9F5RCme8/Kl1xTrXPC8RZs3BcuXQhWCFMwZkFjA15jWtobMuXReMTbldD30uTCRca5CyUyqT906+6gU+1GGE/+RbYaxOaeccq3b+02Df17yAg6QYHjt+dapnM7EmL+yYtI9w3SYtu5GvadVZsx15k7fOmTcEtKGIz6BiJI5CRyovH8Ww92zdW3eRpt3FENMsUIAnzFCvxq24aEYSCNY5+dc/Nlo6uC6diVkEbUPYfM+QoBo3XkGI59RRjxHlQ2HtZGzSSYOkRuCOp61nHRs7sKwHD0uOwcGAhOmmsgdO80i4xZCXCg2V9J32qy8NxSW3YuYBSNidZU8vCq3xpw11ipkFxB8q14tmHNhEJAyqY1nU+I1+A8fLUdPUPnU7uWyiNu8nXWI9o5VABCsDoRm08zW6WDCTyLr29Bv+0b+b4GjL29CM0XD57+3bnSQAs1lNf+4r/4h7P71qrGe7fpDITEsIJk6xAJ9/yra3iQwIkk6R1IiJ6yvvrdzMw5a8oH5DetWmdSeztt5At127JA8qxNDttSWjXbQ+MT37fRrviDSiRzAO/eh251husVSVWDsdCe4RMAx8Kj4h6lv65CgBVwV4uXiZPbtwB1ytr5AU3e+DA1BMco5xqfHs+2kXCEJe9BiDaJ0mRkeRvTV7R1OZtIMxy9IT7gJpMaSaJMW8282uoO/wDKf7+dA8Mk2BppnuR4+luflReLWLMa6Tv4DXXwobhLH0Gw0e74/tbnKKon2R5TPgF+LV3dJFt+ZCn4GuQe2f4V+L1NeH6t/wCBv6TUtbLT0IPs7cuFQTayiFTVxrkATMBG2kb9aeXU7Q8PzpHY4i1u24UF2DKFtgnXtEvH8snpJHWn9u4tzKykMrLmUjYqdQfAiiGrFyYYs4wvZTvYj/Kahw2lFfaAwifx/wClvlQeFYaeVS1+i4v8hQJFbRte+K5d65z+2m4i7HTVHMfWtds45/MVGzjlLeX5nSpcRpnVxvV8SfKCPzFQXH00HWu0QkEnc+wDkBUTmlRVg988qq3G1/WD+Af1NVlvLM1WuPn9YP4B/U1aQRlyPBzwrhRvsQuUQCdfED/UKn4twJsPb9IxUjMq6Dm09aU4biN20f1blPAAz2geYOnZFT4vi9+8hS5czLIMZVGo1GoUGm07JXWv6FcOYBG8SfcKaB0zi325mJyjm2TN60xNJsAeyw6n8qYrZJuZ8/Zz5vvcrgbLttl18axkss2g/wAoZWQGKjqQPaYoq/gFUMZOgJpfh7mUqTyKk+RFF4jiKZGljqrbjQTtzrOma2hZiXAR21ML2VAks0gZe7cmeimjv+3LTKrNccuQhIEAagExKk7TSr06ZlBO7L1H3gd9uWvdNPsPiLeWZVjM6PBMfdEMNTJUTzZZro41SMJpSedA+M4Vasqly3nZ0uIcpI1iXj1Rvk3qo428zXXLrGdmcDoGJI1848q9DwNy12Tca2ddy2miESMzHQksw/ddedeb4+8DdQqwIKDNBkAlmMb6HLl0q07ZE0lGkQXUoW4hzlgYIMjSmLgRWigqrMhX6M9f8o+VZTLIKyix2e8ERtAAgSekQTUjOW8Pjp08/dWnAHOorWJRmygyfA6jqCQAR3idxUFnSoTlBjQnbaIPzNQ8SHZSBAn2dkmK0t420zPObnrz2jSRH1zrriR7KeP+k0DEfCXh7wGhIsAeaXD+USKca9OW3eJ60o4IJuXt/VsTHTI/yFM1RCdFHTSPhuKTGpUd49Ys69G/OguF2z6IGdrl4R43Wo7EKWt5QCDrv0KnXwmaiw1gpYYH/wBjnT964XHuaqIewUkBz/An9Vypbh7Lj9xvgahYfrP5Lf8AVcqW5+zf+E/A0h3oXcBsKWuSoOoIkTBlpjpTm6sOAOn50o4FiEXOWcLou5GupnfxHtqTEcYUXipEABYM6sSWnTkBHXnShoc9sh+1V4LbRiQBnGpOg7LUv4fi7ZH7ROX3hHxor7S4J8TbRbQmLqMZ0GVZJ8ekUJwf7PduLkRqYEw0zoTGkfXOqUc2Ltihg123p+sWf4hXL4q1/wCxP8QpdjOCMHIVwRy5aQCRGu0xSTjWDuYdRdKpkXQiRsSIyjmZAPhNVSFbLNexlr/2IP5h1rhuI2h/8if4hVMtYlLgzAzMabwaZ4bgr3CwP3AZ2jMdkPeJ1HcdqOqBSY+PFbI/+VB/MKEfiln/ANie2qmyMLgtuuR5AhtANQJnprvTRvs9d6p7Tp7qXWId5fA67xK1/wCwe+kXF76u8oZAQD/MasHB/s0vo3/SCM5MLGuVfxDT1pJncaDvpL/0C7LdpCdtCYkE8wKE4oJKT9CYn4fmawmjsLwe5cuNbMIVC+vOslvVgHMNNx3VDxPAmyQGdGmfVJ0iN5A60WhdXVmYXGJbBDGCTI0P5Ubb4xaH3vcflUf2e4eLt0XCRCQQOrbj2b+MUPx3hBsuWT1CTH7n7p7uh8vHOouVGqbUbDG4vb/F7m+Vctxa3+L3H5UiwmH9LcFsOFmdTJ21j2TTdfs9LZPTLmiYyakdR29RVOEUJTk9Aq8ROZitzLlaUGUnlpry3iiLfHrzLyIIjYTqCvke0desGuuF8JUXrnpHBFssII9ZshK7nQSR12oXCqCoj8Nv+lZ981cUmRJtIlxnHbpPqIGbeFgmGZxziBmYDuIHKkyEm4siDI+NMcQv6y34t8KHuj9YPr7xqnEns2FttW65Y6VgNTWCfZusrWasoGez4y7nYJss6jrENqOYy6H+IcxXGMtrJYmXAJGplY1EEaLtr1g7gVHj7i7SGblyUkEaE7gQNfOusPmjWRJYMGIJHZBmQAIiNhpmGmhFQahDYgIUzAZWgZojKdIB5c9+Rmu8TiFuKhQzqdOfqsNvGlOKa7lKtldW0lXXTpyn2TSvh3Ei+ZUSTs5VhkUdqQCNWOx2gVPZ3Rm5ZoY8Cn0l4CMwXDmGOh7NxY289uQprfxRRlViiyRJB2JBjeNOe3KkGExtz0jhbedlCFsuRVEs4AljLsYgz5EayBj+JuUJQAiCzBhPTtARGjj1idvOaG50i5LjLbAhHVjqDDA7jQb6b7RQ91ToxclQolVE5jrr9dK80bGXRcC2ixf1mKDQtkDsIjtHaY6DnVhtcYmyQYUgGVnQH75HcSc3t5UDjkbYfHi5cHZKkqoyncQ1z5j20wufs3/hPwqhcFxzZ2dvW9IfKdx4VcRjAyuAfummU0J3fshYXKzLnzH7oJJjkZkeU1XeJ40XLpKsDGnZ2HdPnt41c+C27dxWVllxBB5gHTSe/wCNA8T4HZZsxDyBuCo9vZ1qIaLk1ZJwPiLXAFLLohiTDaLyA6R061MmJuMxCZioJE68tN+tUdMYcNfS4pLgekXKNMyy9vePWmTHcOtegJjTbPo/QO4GzKG59o8oOpq5K0iIum8BWFwlwgOcozNGsTuBP10pJ9oOD+nKMXEW2MIdFaPvGJMyNvGnGHy3GjJiF0J7edR4SDUV5hbnKoB75J9pM0mn6BSzkUWuHOmtu2gY/eCkEeBZRHlReAvXLNvJctqACdVMkkkkk8uYFDYjGu2hiJ6Dl5Up4vxJ1ULm9bx2FSnTo1cbVsacY4V+kWyTcRRB1NsHLykHNM1UOIY29bZk/TJK/uaHQEciZg99WHBYpmtkE7x8RVJuY0jFG4IMXZAOxAaAPYAKuO6M56s9J4jd10JpHjb7w0MZ7UanfWKFxP2otOqsVcSDpAOxI5HupXjONIyPkDSZEkDQmdd6JIqEkkF4G1ezZrlwsdhJ0UbnX62pdx27muAdF+J+QFADiV0DR/ctRvdzEkmSfDyqeubYpSTjSCsHjXtOCp8R1ojifEnvaFsq/hHPxM60qdhI15H8q7zL1Htq+q2Z9nVG8P8Aq3VwT2SDEb9R5iRV1vWUu2xmCsBqJE+Y6VSC6xyoj9LdFYK7ABlXQmNFYHTyFNocXRZsNYDnFKsqCVgLoBmt9IpNwztID3L7oFZwXE3SSqOMztqWAMwpgnnyjSuOHYhkX9mzJG66kAbkj/imsMieUd4tf1trxb4D50HiR+tXwP8AU1G3sQly5YZfxMCOk5d6Hxa/rE/n92Y027JR0xrln/L4Vw0kwNSdAOpqe/w66CTl6cx0qG0ilFy0gX0lZUNzBPJ094rKLRXjfw9zxCBAXlRCwSRJ57Gdzmj2eaO+l+8haACYgk9nbXskwTA57Dv1FguWBcgOJAMxrEwRyPf764OHW8FGQ5VL6DQSrZRty3PlUNWKVsqOJdlyIbiNLkEqqjKCF7ErIKyCIG5056KLVprTn0dx3RmDkqCJSXBuQpMgideQM6xTTH8ST07owKoq3EUDVVI7IYAeHKq3xPHfrituVUKEWDuoiBPMR/xTUaISPRvs8LWTNbUklFks5YFVZisMdoYsIIB20gCouN4e2bgJdwoCwiZRqDmMtBJBIBy9VB3NVTh3G7tu2luDIuBsxI9UbLEa7nWZA0p7xe8PTXF6Zfh30naRrFJ7I8Ili2wZLWoJYSzNqZkwTEnMBp1NH+ms5f2Vvoewu0Zek6wQB0A61XbmIg7/AF1/P2SOdH8M4dcxAkHIgMZj7DlA5gQszG9NA8aAeJ27S3AbShN5C7T1AGgPcK74RidXnpVlwPBLdtgzq9xurEEDl6umkbCDFE3n9H2cPhwSdSYCKN99ASe4UDTxQi4Fbu+nRltuUKsrmNACAQZPeoqw43DG4jBFBY7bCjUbqDyrWJxYUiBmIjsjeOe8CKEqQm7dlQwuBTDjO4UOoKqzMgIzXLjtHa3MjXoY5kUZYN+QSreye765a78qMt2srMy2kBJbtECde14+sTPfPWpUxFwDW2xPcVIB9x9xoUinH2E4Nzt8fr6+IP2hxWqoIkAk9egra3WaQwcQTMSF0O+bRo9lVzHYovibkEkBEUd5iTFF2hKNM0X28/y+VB4m5bk50Rso1Zo0G+/IVKLkhyJOTRgokg7xA1nXanvAsBbtG9cvZZdlADCRkVEExzklte6oUW2bSmlErbXVtxplzGFEHVuQHspK/CdDltiY005+OlW37Rm26s9pfUKuPFDmMDvXMPOtsE/CPIg01gl/pFAu8Ou9kAL2ZHnJPTbX41NZ4dcEEhZkbbTIA+NXY2LfQDy5+2uP0dfwofKn3EoFet4C4RBj3D8qJtYNhM9SYGm+p9807OHXmgHn865FsctvrpUNs0UUhY+FDRIk9PrWtNgx09wpk2Ubx8fyrpVHL4GoyVgTtw5PE+VD3+FDZfr30/MTsD5T8RUZZOnsmqTYmkVjD8MZnuWwYKrM9DNuP6qd8AwW4I+4/vZCPgfZWsE0Yi7HNUA9ts/6au+DwiLhGYATmie6DpTc2jGUE0eXXMJGNA64rL5Zx/urOIYPLcXxxP8AlUmn3EeHtbxiZhr+l22/xOp/Kp+P4GCrxs+LX/FZdh/SatTIcKKrwg/rGYAFlXSeUyD5xTY4tbnZzhGgCH0HSA23tiofsVhVuYk23nKy8jB2Yj4VYcTwOyFNw29JP3mJ035xTlHsy4T6oQf9NuH7jHvABB8CN6ykfHrdu3fdEPZGUjVjuqtz8ayjxP6X5/4e+NaCqWEE9+gHjSlcW5GQFUliScpaCSWICkhQ2sgtOh20pdiOK+jZ1cSUygDmTkUzM6HWNiOVAYvi4NvKEGZgZJMwSACEA2Hed94GkBlRvinAQnpLhuB2uTkVgAxdnXWZgtE7ADXlS3/tIIPS4jNsD6NYGXT776+we010GZRnc5csQTygyNNgO6rsnEMwVh6r21dfA6nTuzLPjRYnGimcU4jhkt5/QpMkaDMZ3GUddRvoK3xy25v+lUErcVWWNZnlt4d1WXF4m3960hPeinXzFCPxh1AVFCwIUAAAAbARsNtKAZReIXmVoYFT0IIPTY68h3jvq7fZHG27mHS2H7aZpWdRLswMcxBGu0zzpXxPijXAc2o6HUR4GlvBOCW7pNwMyw5EAkQYB0Igga0xHosxznx3qLE4ghTkEtyGn5kUPhMIUWPSMR+8xPxJqLHcRs2/2jx5/X0RQFkVwX33vC2v7glz4k9keQreHwdm2cxZ3fmzlmJ/LypZheLLiLjpad1CpOYhd8wAygr0zanqNKSrxG6MZcstcZkVJGiAzCHUqB1byIo6jUkXTEcQ/AvmfkPnSvGccCesyj+Jv9IifOaQ4u/rDEt4sSNyOveKB/6oFgCB4dwn8jR0H5F8Gl7jWd8klojuUeAG55U2s4a1aCvlDOwDlmglSyxC8h2TGnfyrz/hlzNcLE6de/xq24HiS37X7yAKR+6NFYdZA9oPdTUcilJtEmN4w6mFMde/nSx8U7ntGo7w175rQ2J+pokKIXaxRCxlJBnbYiSNT4D31vC3mCqmggATzMfE1MmAIUdwHjAFa9AD6wPjWTN4khuRqQB8az05A7K+YrtLAGgY+B+VSNhp+Y/tUM0QMl0zJGvl/wA1NnMSw+vPlWHDddfOultEbE0hmhqdp7h89q6NwnSAB3VIiA9PZ8q6a19TI99FiBnY7QAK2ugmPl86lyFfDzH17KIS2GG3wosKF3CsDnv3jzVVYR1AEVZLVu5bL2m0AIMDaeyNJ8TSHBYsW8W6HTOiD2g/7asuJf8ASbj+hOrCATyIif6aTyZSK/8Aay+DjLcEEC7YnuOZY+Brj7R3R6MCdTiLmnX9ReU/1D20t48h/S2bl6bDEewz8KI+0dskI34cXdX/ABKR+VWllMiRUuCKS7gTsu2+52qwf9Pu3AWV2PUSefUExJj460i+zwJuNBgwu/iauvD8YqALcBXO1tAY0k5o15DTfwq5yaeCuOKayV1Q9vsei9XTW1PvBE/W+9ZV8bCCsqPMy/FEWfaHDt6V2zombLp6z+qB6o0G25PlVaPELaEi2M7j1mJkA955nuHupdxLF3bzZQciHcayfE8/dWWkCrlGw+prWvplfwkuXXuNLtMagcgO4VcuA4zNh7TT+zuG2xP4LkZf87IP5TVLsHU+H508+zN4O13DZoNxDlP4bi6qfESW/lFAPRasVaBNBXMOKYWLvpLaXIgsoJB3BjVT3g6eVcXQAKCGUvi7hWI9ngeXlt5UT9lLjEP6OXYEdiQAZ+8SdI0iKDKpcxQS4YQsQTMbgxryEwDV3Q4fB2+zlBjZYk+MVTEIeLXuIHspZZF6oVY9N1JI8dKTpwAzmxF1U6gHO/tAKj30dxj7SXLnZBheg+taTG8dyaMgTo62GxZtwQgslM2oIJg+Pr+0d1ZgrGbiDBWyk2lJ1PrFbZIBIYxqOtCYu+P0e/8AiyW48BdT5++mODdRxQ7Ai2B4tlT35R7qYhzZ4IM5a+cwGyjSfEgzHdpPxIvcPwzaehTpIUA+3epcXe7Wh+tvyqPNTEBYzgqMP1ZgDZTtG0CNq3wTgptl7rgLKZRtJ1BnQ7dkb1PecgUDjcc+TLO8/XvpgKsRdl2jUSYqbB287qvVhPgNT8BQiiDFOuB2NTcOwEDWNTqfd8aiRcUNWQTvBrTFee9SO06DQdRWIigTWbZqkRLYVuRNcPZVdJPt/trUj4qdF9vL+9bFqdSfM1LLRCp7g3jp8NansiRr7Y08O+tqo2H9vZU+i7mpZSNjDLEkVpMKDtJ+utSIJ326T8flRBdVHTw3qSjkYNagfBsNbcE+7zA+NG2Xzbjy+dFKqiptgefcVcrjUYo8/qtAJJIZgwXr6w9tWH7J49bdxhclCGYwwIIBGkgiad3rKPlzKpykFZAMEbETse+geJcNW6sMcrCcrgaj5ju/5qu2iHG0VH7TYkembX1fRE+0a+/30b9qMUotL1/S2/yuR8CNecTzqrfadXt3riMQWFtdRse0pB9lMvtjet+iT0eUD0mYgHmQBty0UVqorBhJuxT9n1m4w19Ubb71euFbajMoKmfwx1G48dR31Rfs6f1p8B+dXbCYlUy5jlLOqqerEGB5wafIacWh5mHWt0JlH4R7fkayuc3POhvUhfyrgsBqfrwrkIWMtoOnz6n613rqOXRrVjpoOvXw+f8AzR3DbvoriXB9xgfEfeHmJE99QgRWi8mB8Pj9a+8Aj0WxCs6DVSc6xtDyT4nOHPgy1BibuhoPg2Lm2mfQ2yEk7MjDQDbUZASOQQ7zRmLbegllJxiRcJ76jxGIJEDajsWQHkiRO20908qVswAg/RqySMtWnPfTLB8Fu3IaMiGCGbmO5d9jOsA9asWB4RZtLm9ZxqXeIEayOSjv3HWgZTPQm5bugbhF05mblsR767VmTiRJI1uGD+7MAA9ezk8ZB5xNi8ZluXWtgP6R1g69S4IGhYkjbvpFiHb0hcntgksyn70kkgz1IGmmlAF4xN4viQgbslJnfWPhUmGvs1y5biSgQk6CcwJEa9x51V7HFXXJekFoIObYjMZ9UaaKNhpHPm54HxQPcu3YjMLYI6FQ0weY1pgM8TfhgkNnIJywCSBoTp3mlOMuNIXIwnQSCJ9tH3LyviFbXS24mOZZD+RqfEN2GY7rlafCl2H1xYuwXDWYy+g6Df8AtRPC/wBXduWzMSHWehifZoPKpWtwdJ8ZHnUWIYpcS735D4Eaew1F2X1SGd2/Gyn676gZWbf3/XxqRXDc9frka2QRr/x8azs1o3ZIHz5VMFM9o/8AHy9lBXFnXWev1qK4tuy89N/7x/akMZltNAAOp292/u5Vq2h9Ynz6+HzoUXp3Ps0Ps2qVVgaE+8f3pDCnvRoNO/63rdu2W+p/4obPO/1512g8vr2UqAZ27gA0Pn8q79JrvpS8XGG+v1762tzxX3j21DQxxZbNryrT2g3L4j31DhTPPzBpgs0UJujzf7b8OuKz3FXMlxEU7kqykEHrrqJ10Y7RJpeMNxySS5EyMykRrz5CvauIJIIPOqzPo2gqGXp9TBraE8UZyheSkcMYozMIOgjeDqeoq1cJx6Xl7MFlIJU7iDuOo/e5Gusbg7Vy4BbGQtsxYBC34CIPb+PKTIqtOpt3SmZA6NGZWYdroGCb8o7jvV12JvqehZ+81lVC39rHAhrSZhvm9KD5gJA8qys/FI08sRaqcyZ+tgOQqYvFZWVsYEZcnb66+e9OOFYAXBn5dD9a6VlZQMaYvDhrmGsDbM11v5fVHfqp9tWFsGH1YAzG0r8DWVlDJEv2o4Vat2S6AqwO+Zj3DcnrTfFYC3as3AiIpCGSFAJjUyQJP15ZWUehAeFtEWLIkfsre3TIu9I/tEWFlzOmngQCCdOmm1ZWU0Iq+LLIqkgT2Z5jTMV33HZHwpPfYkkkzOpPfWVlUAYFJsoABuf6nprwvBlRJ5+HvrdZS9lehvaUSNI7xRuclXVhup8Dz/KsrKXsfoMsL6QA9QDpodQPb51Fj7BKsCAZGhGmu4nXrFbrKz9mhMmHzDNsdCRpoa21kjXl7/r31lZWbNEbtgHff61ro2hvz+vbWVlAGja01AIqRLQ+vl/etVlMDGsmARqPfWWWE7kd31v51lZSAnXSpEMHvrKypYw3DEUfbeK3WUEsDxTA0mxuHDjoetZWUIYjxNsqCGAZTofl4Utu2grKVW2GD9l2UnUjLkuBSM8kiLkFpiebVlZW8TOQuxLrbdkuXvRupIZVLsAe4m0xPXUmsrKytCD/2Q==',
        category: 'kaif',
        free: false,
        working_hours: '9-18',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Places', null, {});
     */
    await queryInterface.bulkDelete('Places', null, {});
  }
};