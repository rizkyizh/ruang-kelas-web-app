import { Box, Button, Icon, Input, Text, useColor } from '@hudoro/admin';
import LayoutContainer from '../Container';

export function Footer() {
  const color = useColor();
  return (
    <Box id="footer">
      <Box>
        <LayoutContainer marginBlock="spacing-10">
          <Box direction="row" gap="lg" justify="space-between">
            <Box gap="md">
              <Text color="primary" fontSize="2xl" fontWeight="bold">
                RUANG KELAS
              </Text>
              <Text fontSize="sm">
                Jl. Slamet Riyadi No 99 <br />
                Surakata, Jawa Tengah <br />
                Indonesia <br />
                <br />
                <strong>Phone:</strong> +1 234 56789
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </Text>
            </Box>

            <Box gap="md">
              <Text fontWeight="bold">Tautan yang Berguna</Text>
              <Box>
                <Box direction="row" align="center" gap="xs">
                  <Icon
                    name="ChevronRight"
                    size="sm"
                    style={{
                      color: color?.brand?.primary?.default
                    }}
                  />
                  <Text fontSize="sm" fontWeight="medium">
                    Home
                  </Text>
                </Box>
                <Box direction="row" align="center" gap="xs">
                  <Icon
                    name="ChevronRight"
                    size="sm"
                    style={{
                      color: color?.brand?.primary?.default
                    }}
                  />
                  <Text fontSize="sm" fontWeight="medium">
                    Tentang Kami
                  </Text>
                </Box>
                <Box direction="row" align="center" gap="xs">
                  <Icon
                    name="ChevronRight"
                    size="sm"
                    style={{
                      color: color?.brand?.primary?.default
                    }}
                  />
                  <Text fontSize="sm" fontWeight="medium">
                    Layanan
                  </Text>
                </Box>
                <Box direction="row" align="center" gap="xs">
                  <Icon
                    name="ChevronRight"
                    size="sm"
                    style={{
                      color: color?.brand?.primary?.default
                    }}
                  />
                  <Text fontSize="sm" fontWeight="medium">
                    Terms of service
                  </Text>
                </Box>
                <Box direction="row" align="center" gap="xs">
                  <Icon
                    name="ChevronRight"
                    size="sm"
                    style={{
                      color: color?.brand?.primary?.default
                    }}
                  />
                  <Text fontSize="sm" fontWeight="medium">
                    Privacy policy
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box gap="md">
              <Text fontWeight="bold">Layanan Kami</Text>
              <Box>
                <Box direction="row" align="center" gap="xs">
                  <Icon
                    name="ChevronRight"
                    size="sm"
                    style={{
                      color: color?.brand?.primary?.default
                    }}
                  />
                  <Text fontSize="sm" fontWeight="medium">
                    Web Design
                  </Text>
                </Box>
                <Box direction="row" align="center" gap="xs">
                  <Icon
                    name="ChevronRight"
                    size="sm"
                    style={{
                      color: color?.brand?.primary?.default
                    }}
                  />
                  <Text fontSize="sm" fontWeight="medium">
                    Web Development
                  </Text>
                </Box>
                <Box direction="row" align="center" gap="xs">
                  <Icon
                    name="ChevronRight"
                    size="sm"
                    style={{
                      color: color?.brand?.primary?.default
                    }}
                  />
                  <Text fontSize="sm" fontWeight="medium">
                    Product Management
                  </Text>
                </Box>
                <Box direction="row" align="center" gap="xs">
                  <Icon
                    name="ChevronRight"
                    size="sm"
                    style={{
                      color: color?.brand?.primary?.default
                    }}
                  />
                  <Text fontSize="sm" fontWeight="medium">
                    Marketing
                  </Text>
                </Box>
                <Box direction="row" align="center" gap="xs">
                  <Icon
                    name="ChevronRight"
                    size="sm"
                    style={{
                      color: color?.brand?.primary?.default
                    }}
                  />
                  <Text fontSize="sm" fontWeight="medium">
                    Graphic Design
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box gap="sm" width="width-1-4">
              <Text fontWeight="bold">Bergabunglah dengan Buletin Kami</Text>
              <Text fontSize="sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                dolores corrupti modi.
              </Text>
              <Box direction="row" gap="sm">
                <Input type="email" name="email" />
                <Button type="submit" value="Subscribe">
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Box>
        </LayoutContainer>
      </Box>
      <Box bg="gray-50">
        <LayoutContainer marginTop="spacing-0">
          <Box
            direction="row"
            gap="xs"
            align="center"
            style={{
              height: '4rem'
            }}
          >
            <Text fontSize="sm">&copy; Copyright</Text>
            <Text fontSize="sm" fontWeight="medium">
              Ruang Kelas
            </Text>
            <Text fontSize="sm">All Rights Reserved</Text>
          </Box>
          {/*
        <Box>
          <a href="#" className="twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </Box>*/}
        </LayoutContainer>
      </Box>
    </Box>
  );
}
